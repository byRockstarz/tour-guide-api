import { Base } from 'src/common';
import { Column, Entity } from 'typeorm';

@Entity()
export class Tour extends Base {
  @Column({ type: 'float' })
  lat: number;

  @Column({ type: 'float' })
  lng: number;
}
