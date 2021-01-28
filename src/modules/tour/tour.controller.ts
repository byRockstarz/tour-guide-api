import { Body, Controller, Get, Header, Param, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { query, Response } from 'express';
import { CreateTourDto } from './dtos/create-tour.dto';
import { TourService } from './tour.service';

@Controller('tours')
export class TourController {
    constructor(private readonly tourService : TourService) { }
    
    @Get()
    getTours(){
        // res.redirect('http://www.google.com')
        return this.tourService.getTours();
    } 

    @Post()    
    createTour( @Body() CreateTourDto : CreateTourDto){
    return CreateTourDto;
    }

}
