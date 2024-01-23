import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CannabisModule } from './cannabis/cannabis.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cannabis } from './cannabis/entities/cannabis.entity';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/user.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'bmhf58bmfxnwpurgtbzz-mysql.services.clever-cloud.com',
    port: 3306,
    username: 'uvzuskrszvcd1o1v',
    password: "3QduWEkjMnpJk4mJnuJM",
    database: 'bmhf58bmfxnwpurgtbzz',
    entities: [Cannabis,Users],
    synchronize: true,
  }),
  CannabisModule,
  UsersModule,
],
  controllers: [AppController],
  providers: [AppService],
  
})

export class AppModule {}
