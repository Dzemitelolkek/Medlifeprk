import { createAction, props } from '@ngrx/store';
import { MyImageData } from '../interfaces/image-data';

export interface GalleryLoadedPayload {
  data: MyImageData[]
}

export const galleryLoaded = createAction(
  '[Gallery] Gallery loaded',
  props<GalleryLoadedPayload>()
);
