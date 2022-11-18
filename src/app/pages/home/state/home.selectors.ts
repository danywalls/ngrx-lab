//selector from state
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {HomeState} from './home.state';

export const getNameFeatureState = createFeatureSelector<HomeState>('home');

export const getNameSelector = createSelector(
  getNameFeatureState,
  state => state.name
)
