import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component'
import { BreedCardComponent } from './components/breed-card/breed-card.component'
import { BreedBioComponent } from './components/breed-bio/breed-bio.component'
import { HttpClientModule } from '@angular/common/http'; 
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { breedReducer } from './store/breed.reducer';
import { BreedEffects } from './store/breed.effects';
import { LoadingComponent } from './components/loading/loading.component'; // Import the BreedEffects

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    BreedCardComponent,
    BreedBioComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('breed', breedReducer),
    EffectsModule.forRoot([BreedEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }