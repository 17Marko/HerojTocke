import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { DummyService } from './dummy.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
	FormsModule,
	HttpClientModule
  ],
  declarations: [
    AppComponent,
	HeroesComponent
  ],
  providers: [DummyService],
  bootstrap: [AppComponent]
})
export class AppModule { }