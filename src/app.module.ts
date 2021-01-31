import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourModule } from './modules/tour/tour.module';

@Module({
  imports: [TypeOrmModule.forRoot(), TourModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
