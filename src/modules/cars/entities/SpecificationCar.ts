import { v4 as uuidV4 } from 'uuid';

export class SpecificationCar {
  id: string;

  // car_id: string;
  // specification_id: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
