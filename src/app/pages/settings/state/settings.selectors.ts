import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SettingsState} from './settings.state';

const getColorFeatureSelector = createFeatureSelector<SettingsState>('settings');


export const getColorSelector = createSelector(
  getColorFeatureSelector,
  state => state.colorName
)


