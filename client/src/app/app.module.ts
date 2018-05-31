import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ListComponent } from './players/list/list.component';
import { ApiService } from './shared/api.service';
import { NavComponent } from './nav/nav.component';
import { PlayersPipe } from './shared/pipe/players.pipe';
import { AddComponent } from './players/add/add.component';

var router = [
  {
    path: '',
    component: ListComponent,
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddComponent,
    pathMatch: 'full'
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavComponent,
    PlayersPipe,
    AddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule, ReactiveFormsModule,
    HttpModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
