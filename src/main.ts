import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import * as bodyParser from 'body-parser';
import { Request, Response } from "express";
import { AppModule } from "./app.module";

declare const module: any;

async function bootstrap() {

  const app = await NestFactory.create(AppModule, { bodyParser: false });
  // app.useGlobalPipes(new ValidationPipe());
  // app.use((req: Request, res: Response, next: any) => {

  //   next();
  // })

  const rawBodyBuffer = (req, res, buf, encoding) => {
    if (buf && buf.length) {
      req.rawBody = buf.toString(encoding || "utf8");
      
    }
  };


  app.use(bodyParser.urlencoded({ verify: rawBodyBuffer, extended: true }));
  app.use(bodyParser.json({ verify: rawBodyBuffer }));

  app.enableCors({
    allowedHeaders: "*",
    origin: "*",
  });
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
