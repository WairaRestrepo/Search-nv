import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IkaeegListComponent } from './ikaeeg-list/ikaeeg-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IkaeegListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
