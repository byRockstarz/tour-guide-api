import { IsLatitude, IsLongitude, IsNotEmpty } from 'class-validator';
export class CreateTourDto {
  @IsLatitude()
  lat: number;
  @IsLongitude()
  lng: number;
}
