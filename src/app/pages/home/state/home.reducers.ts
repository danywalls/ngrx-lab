import {createAction, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import * as AppState from '../../../state/app.state';

export interface State extends AppState.State {
  home: HomeState
}

const saveNameAction = createAction('[Home]');

export interface HomeState {
  name: string;
}

const initialState: HomeState = {
  name: ""
}

export const homeReducer = createReducer<HomeState>(
  initialState,
  on(saveNameAction, (state): HomeState => {
    return {
      ...state,
      name: "hello world"
    }
  })
);

//selector from state
const getNameFeatureState = createFeatureSelector<HomeState>('home');

export const getNameSelector = createSelector(
  getNameFeatureState,
  state => state.name
)
