import {Component} from '@angular/core';
import {HomeService} from '../home/home.service';
import {SettingsService} from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  colorSelected$ = this.settingService.colorPickerAction$;
  name$ = this.homeService.nameAction$;

  constructor(private settingService: SettingsService, private homeService: HomeService) {
  }

  save(color: string) {
    this.settingService.setColor(color);
  }
}
