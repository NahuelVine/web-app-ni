import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { List } from './entities/list.entity';
import { ListService } from './list/list.service';
import { ListController } from './list/list.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      synchronize: true,
      logging: false,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    TypeOrmModule.forFeature([List])
  ],
  controllers: [AppController, ListController],
  providers: [AppService, ListService],
})
export class AppModule {}
