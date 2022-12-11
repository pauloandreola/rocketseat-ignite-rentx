import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('rentals')
export class Rental {
  @PrimaryColumn()
  id?: string;

  // car_id: string;
  // user_id: string;
  // start_date: Date;
  // end_date: Date;
  // expected_return_date: Date;
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
