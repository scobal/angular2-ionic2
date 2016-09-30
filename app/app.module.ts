import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule }   from 'ionic-angular';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
      BrowserModule,
      IonicModule.forRoot(AppModule)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
