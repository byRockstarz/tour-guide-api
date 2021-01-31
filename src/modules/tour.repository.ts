import { Entity, EntityRepository, Repository } from 'typeorm';
import { Tour } from './tour/tour.entity';

@EntityRepository(Tour)
export class TourRepository extends Repository<Tour> {}
