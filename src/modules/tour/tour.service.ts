import { Injectable } from '@nestjs/common';
import { TourRepository } from '../tour.repository';
import { CreateTourDto } from './dtos/create-tour.dto';

@Injectable()
export class TourService {
  constructor(private readonly tourRepository: TourRepository) {}
  async getTours() {
    return await this.tourRepository.find();
  }

  async createTour(createTourDto: CreateTourDto) {
    const tour = this.tourRepository.create(createTourDto);
    return await this.tourRepository.save(tour);
  }
}
