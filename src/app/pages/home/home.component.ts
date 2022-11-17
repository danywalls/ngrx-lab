import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {SettingsService} from '../settings/settings.service';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  selectedColor$ = this.settingsService.colorPickerAction$;
  name$ = this.homeService.nameAction$;
  constructor(private settingsService: SettingsService,
              private homeService: HomeService) {
  }



  save(name: string) {
    this.homeService.saveName(name)
  }
}
