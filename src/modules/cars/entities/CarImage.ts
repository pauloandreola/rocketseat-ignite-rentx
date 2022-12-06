import { v4 as uuidV4 } from 'uuid';

export class CarsImage {
  id: string;

  // car_id: string;
  image_name: string;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
