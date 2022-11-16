import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

const routes: Route[] = [
  {
    path: '',
    component: HelloComponent,
  },
  {
    path: 'color',
    component: ColorPickerComponent,
  },
];
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, HelloComponent, ColorPickerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
