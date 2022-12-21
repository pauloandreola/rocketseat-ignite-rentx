import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Car } from './car';
import { Specification } from './specification';

@Entity('specificationsCar')
export class SpecificationCar {
  @PrimaryColumn()
  id: string;

  @ManyToMany(() => Car)
  @JoinColumn({ name: 'car_id' })
  car: Car;

  @Column()
  car_id: string;

  @ManyToMany(() => Specification)
  @JoinColumn({ name: 'specification_id' })
  specification: Specification;

  @Column()
  specification_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
