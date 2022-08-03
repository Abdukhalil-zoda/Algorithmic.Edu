import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeComponent } from './theme/theme.component';
import {SolveProblemComponent} from "./solve-problem/solve-problem.component";

const routes: Routes = [
  {path: 'theme/:name', component: ThemeComponent},
  {path: 'problem/:id', component: SolveProblemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
