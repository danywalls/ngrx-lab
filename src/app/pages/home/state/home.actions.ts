import {createAction, props} from '@ngrx/store';

export const saveNameAction = createAction(
  '[Home] Save Name',
  props<{ name: string }>()
);
