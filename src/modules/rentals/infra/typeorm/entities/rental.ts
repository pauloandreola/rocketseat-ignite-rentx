import { v4 as uuidV4 } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

import { User } from '@modules/accounts/infra/typeorm/entities/user';
import { Car } from '@modules/cars/infra/typeorm/entities/car';

@Entity('rentals')
export class Rental {
  @PrimaryColumn()
  id?: string;

  @OneToOne(() => Car)
  @JoinColumn({ name: 'car_id' })
  car: Car;

  @Column()
  car_id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  user_id: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  expected_return_date: Date;

  @Column()
  total: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
