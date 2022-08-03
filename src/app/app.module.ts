import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeComponent } from './theme/theme.component';
import { ProblemsComponent } from './problems/problems.component';
import { SolveProblemComponent } from './solve-problem/solve-problem.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    ProblemsComponent,
    SolveProblemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
