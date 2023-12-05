import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Mugicook API')
    .setDescription('All API of Mugicook app')
    .setVersion('1.0')
    .addTag('Mugicook')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  //build swagger at link: localhost:3000/api
  SwaggerModule.setup('api', app, document);

  //run app at port 3000
  await app.listen(3000);

}
bootstrap();
