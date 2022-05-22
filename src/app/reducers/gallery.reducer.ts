import { createReducer, on } from '@ngrx/store';
import { galleryLoaded, GalleryLoadedPayload } from '../actions/gallery.actions';
import { MyImageData } from '../interfaces/image-data';

export const galleryFeatureKey = 'gallery';

export const initialState: MyImageData[] = null;

export const reducer = createReducer(
  initialState,
  on(
    galleryLoaded,
    (state: MyImageData[], action: GalleryLoadedPayload) => action.data
  )
);
