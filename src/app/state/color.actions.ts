import { createAction, props } from '@ngrx/store';

export const pickColor = createAction(
  '[pickColor] Increment',
  props<{ color: string }>()
);
