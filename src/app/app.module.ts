import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentsComponent } from './parents/parents.component';
import { AliceComponent } from './alice/alice.component';
import { BobComponent } from './bob/bob.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentsComponent,
    AliceComponent,
    BobComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
