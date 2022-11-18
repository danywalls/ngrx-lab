import {createReducer, on} from '@ngrx/store';
import * as HomeActions from './home.actions';
import {homeInitialState, HomeState} from './home.state';


export const homeReducer = createReducer<HomeState>(
  homeInitialState,
  on(HomeActions.saveNameAction, (state, action): HomeState => {
    return {
      ...state,
      name: action.name
    }
  })
);





