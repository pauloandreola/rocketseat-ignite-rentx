import { CarImage } from '../infra/typeorm/entities/carImage';

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface ICarsImagesRepository {
  create(car_id: string, image_name: string): Promise<CarImage>;
}
