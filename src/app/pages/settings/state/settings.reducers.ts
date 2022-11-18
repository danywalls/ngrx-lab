import {createReducer, on} from '@ngrx/store';
import * as SettingsActions from './settings.actions';
import {settingInitialState, SettingsState} from './settings.state';

export const settingReducer = createReducer<SettingsState>(
  settingInitialState,
  on(SettingsActions.saveColorAction, (state, action): SettingsState => {
    return {
      ...state,
      colorName: action.colorName,
      url: "http://localhost:8080"
    }
  })
)


