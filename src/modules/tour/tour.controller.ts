import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTourDto } from './dtos/create-tour.dto';
import { TourService } from './tour.service';

@Controller('tours')
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Get()
  getTours() {
    return this.tourService.getTours();
  }

  @Post()
  createTour(@Body() createTourDto: CreateTourDto) {
    return this.tourService.createTour(createTourDto);
  }
}
