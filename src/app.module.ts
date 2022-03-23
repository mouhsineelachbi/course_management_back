import {
  DynamicModule,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentModule } from "./student/student.module";
import { ProfessorModule } from "./professor/professor.module";
import { CourseModule } from "./course/course.module";
import { RawBodyMiddleware } from "./middlewares/raw-body.middleware";
import { JsonBodyMiddleware } from "./middlewares/json-body.middleware";
import { ConfigModule } from "@nestjs/config";
import { DatabaseConfig } from "src/config/db_configuration"

@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true, load: [DatabaseConfig] }),
    TypeOrmModule.forRoot(DatabaseConfig),
    UsersModule,
    AuthModule,
    StudentModule,
    ProfessorModule,
    CourseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(RawBodyMiddleware)
      .forRoutes({
        path: "/stripe-webhooks",
        method: RequestMethod.POST,
      })
      .apply(JsonBodyMiddleware)
      .forRoutes("*");
  }
}
