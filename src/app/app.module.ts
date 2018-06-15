import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { EventAndDataBindingComponent } from './components/event-and-data-binding/event-and-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    EventAndDataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
          path: 'event-and-data-binding',
          component: EventAndDataBindingComponent
      }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
