import { Component } from '@angular/core';
import { ColorStateService } from '../../services/color-state.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
})
export class ColorPickerComponent {
  public bgcolor$ = this.colorStateService.color$;

  constructor(private colorStateService: ColorStateService) {}

  saveColor(color: string) {
    this.colorStateService.updateColor(color);
  }
}
