import { Module } from '@nestjs/common';
import { TourModule } from './modules/tour/tour.module';

@Module({
  imports: [TourModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
