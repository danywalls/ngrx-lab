import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import {getColorSelector} from '../settings/state/settings.selectors';
import {saveNameAction} from './state/home.actions';
import {getNameSelector} from './state/home.selectors';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedColor$ = this.store.select(getColorSelector)
  name$ = this.store.select(getNameSelector);

  constructor(
    private store: Store<AppState>,
  ) {
  }

  save(name: string) {
    this.store.dispatch(saveNameAction({name: name}));
  }
}

