import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorStateService {
  private colorChangeBehaviorSubject = new BehaviorSubject('');
  public color$ = this.colorChangeBehaviorSubject.asObservable();

  updateColor(value: string) {
    this.colorChangeBehaviorSubject.next(value);
  }
}
