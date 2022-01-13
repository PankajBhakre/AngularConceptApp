import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { CounterChildComponent } from './counter-child/counter-child.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterParentComponent,
    CounterChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
