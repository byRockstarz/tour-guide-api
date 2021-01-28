import { Injectable } from '@nestjs/common';

@Injectable()
export class TourService {
    getTours(){
        return [123];
    }
}
