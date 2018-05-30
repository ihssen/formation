import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './players/list/list.component';
import { ApiService } from './shared/api.service';
import { NavComponent } from './nav/nav.component';

var router = [
  {
    path: '',
    component: ListComponent,
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
