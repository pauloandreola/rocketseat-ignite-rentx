import { CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('specificationsCar')
export class SpecificationCar {
  @PrimaryColumn()
  id: string;

  // car_id: string;
  // specification_id: string;
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
