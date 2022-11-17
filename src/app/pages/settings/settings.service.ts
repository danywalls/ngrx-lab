import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class SettingsService {

  private colorPickerSubject = new BehaviorSubject<string>('');
  public colorPickerAction$ = this.colorPickerSubject.asObservable()

    public setColor(color: string) {
      this.colorPickerSubject.next(color);
    }

}
