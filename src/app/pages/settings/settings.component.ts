import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import {getNameSelector} from '../home/state/home.selectors';
import {saveColorAction} from './state/settings.actions';
import {getColorSelector} from './state/settings.selectors';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  colorSelected$ = this.store.select(getColorSelector);
  name$ = this.store.select(getNameSelector);

  constructor(private store: Store<AppState>) {
  }

  save(color: string) {
    this.store.dispatch(saveColorAction({colorName: color, url: "www.google.com"}))
  }
}
