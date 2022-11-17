import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class SettingsService {

  private colorPickerSubject = new BehaviorSubject<string>('');
  public colorPickerAction$ = this.colorPickerSubject.asObservable()

  public setColor(color: string) {
    this.colorPickerSubject.next(color);
  }

}
