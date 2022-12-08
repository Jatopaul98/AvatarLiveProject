import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SecondComponent } from './second/second.component';
import { TestComponent } from './test/test.component';
import { ThirdComponent } from './third/third.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FooterComponent,
    NavComponent,
    SecondComponent,
    TestComponent,
    ThirdComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
