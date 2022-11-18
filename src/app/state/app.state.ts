import {homeReducer} from '../pages/home/state/home.reducers';
import {HomeState} from '../pages/home/state/home.state';
import {settingReducer} from '../pages/settings/state/settings.reducers';
import {SettingsState} from '../pages/settings/state/settings.state';

export interface AppState {
  home: HomeState;
  settings: SettingsState;
}

export const appState = {settings: settingReducer, home: homeReducer}
