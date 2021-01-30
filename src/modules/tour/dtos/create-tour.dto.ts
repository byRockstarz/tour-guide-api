import { IsLatitude, IsLongitude, IsNotEmpty } from 'class-validator';
export class CreateTourDto {
  @IsNotEmpty()
  detail: string;
  @IsLatitude()
  lat: number;
  @IsLongitude()
  lng: number;
}
