import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('MugiRecipe API')
    .setDescription('API of MugiRecipe app')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  //build swagger at link: localhost:3000/api
  SwaggerModule.setup('/', app, document);

  //run app at port 3000
  await app.listen(3000);

}
bootstrap();
