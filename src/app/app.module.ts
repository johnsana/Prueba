import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TableBasicExample } from './app.component';

@NgModule({
  declarations: [
    TableBasicExample
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TableBasicExample]
})
export class AppModule { }
