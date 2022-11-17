import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {SettingsService} from '../settings/settings.service';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedColor$ = this.settingsService.colorPickerAction$;
  name$ = this.store.select("home");

  constructor(
    private store: Store<any>,
    private settingsService: SettingsService,
    private homeService: HomeService) {
  }

  save(name: string) {
    this.store.dispatch({type: '[Home]'});
    //this.homeService.saveName(name)
  }
}
