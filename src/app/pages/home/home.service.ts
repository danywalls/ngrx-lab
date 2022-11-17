import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({ providedIn: 'root'})
export class HomeService {
  private nameSubject = new BehaviorSubject<string>('');
  public nameAction$ = this.nameSubject.asObservable()

  public saveName(name: string) {
    const message = `Hi ${name} `
    this.nameSubject.next(message);
  }
}
