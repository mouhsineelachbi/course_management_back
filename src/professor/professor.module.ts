import { Professor } from "./entities/professor.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { ProfessorService } from "./professor.service";
import { ProfessorController } from "./professor.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Professor])],
  controllers: [ProfessorController],
  providers: [ProfessorService],
})
export class ProfessorModule {}
