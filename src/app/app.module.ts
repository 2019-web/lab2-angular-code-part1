import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentsComponent } from './parents/parents.component';
import { AliceComponent } from './alice/alice.component';
import { BobComponent } from './bob/bob.component';
import { TomComponent } from './tom/tom.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentsComponent,
    AliceComponent,
    BobComponent,
    TomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
