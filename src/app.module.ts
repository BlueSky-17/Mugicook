import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://khacquan:khacquan211@cluster0.nogtoqk.mongodb.net/'), CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
