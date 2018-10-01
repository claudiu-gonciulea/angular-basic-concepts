import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { EventAndDataBindingComponent } from './components/event-and-data-binding/event-and-data-binding.component';
import { MenuItem2Component } from './components/menu-item-2/menu-item-2.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    EventAndDataBindingComponent,
    MenuItem2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
          path: 'event-and-data-binding',
          component: EventAndDataBindingComponent
      },
      {
          path: 'item-2.component',
          component: MenuItem2Component
      }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
