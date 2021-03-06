import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { SunComponent } from './sun/sun.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SunComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, FormsModule]
})
export class AppModule { }
