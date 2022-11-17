import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import {SettingsService} from '../settings/settings.service';
import {getNameSelector, State} from './state/home.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedColor$ = this.settingsService.colorPickerAction$;
  name$ = this.store.select(getNameSelector);

  constructor(
    private store: Store<State>,
    private settingsService: SettingsService,
  ) {
  }

  save(name: string) {
    this.store.dispatch({type: '[Home]'});

  }
}
