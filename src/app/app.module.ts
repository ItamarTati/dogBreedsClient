import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component'
import { BreedCardComponent } from './components/breed-card/breed-card.component'
import { BreedBioComponent } from './components/breed-bio/breed-bio.component'

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    BreedCardComponent,
    BreedBioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
