import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ThomCo25:ThomCoMDP@cluster0.9c63we3.mongodb.net/UEL315_S3?retryWrites=true&w=majority'),
    ConfigModule.forRoot(),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
