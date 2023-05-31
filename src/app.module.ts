import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'rafo443953',
      database: 'mydb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CardsModule,
  ],
})
export class AppModule {}
