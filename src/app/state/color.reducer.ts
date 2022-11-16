import { createReducer, on } from '@ngrx/store';

import { pickColor } from './color.actions';

export const initialState = {
  color: '',
};

export const pickColorReducer = createReducer(
  initialState,
  on(pickColor, (state, props) => {
    return { ...state, color: props.color };
  })
);
