import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourRepository } from '../tour.repository';
import { TourController } from './tour.controller';
import { TourService } from './tour.service';

@Module({
  imports: [TypeOrmModule.forFeature([TourRepository])],
  controllers: [TourController],
  providers: [TourService],
})
export class TourModule {}
