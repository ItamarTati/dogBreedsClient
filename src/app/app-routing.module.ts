import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedBioComponent } from './components/breed-bio/breed-bio.component';

const routes: Routes = [
  { path: 'dog-breeds/:id', component: BreedBioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
