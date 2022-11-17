import {createAction, createReducer, on} from '@ngrx/store';


const saveNameAction = createAction('[Home]');
const initialState = {
  name: "",
  color: ""
}
export const homeReducer = createReducer(
  initialState,
  on(saveNameAction, state => {
    return {
      ...state,
      name: "hello world",
      color: "a new color"
    }
  })
);
