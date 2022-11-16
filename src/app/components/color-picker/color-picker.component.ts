import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColorStateService } from '../../services/color-state.service';
import { pickColor } from '../../state/color.actions';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
})
export class ColorPickerComponent {
  // public bgcolor$ =

  constructor(private store: Store) {}

  saveColor(color: string) {
    this.store.dispatch(pickColor({ color }));
  }
}
