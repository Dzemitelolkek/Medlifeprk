
import { NgModule, LOCALE_ID } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';

import { initApp } from './actions/init-app.actions';
import { reducers, metaReducers, State } from './reducers';

import { environment } from '../environments/environment';

import { ConfigEffects } from './effects/config.effects';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ServicesComponent } from './components/services/services.component';
import { SpecialistsComponent } from './components/specialists/specialists.component';
import { CaruselComponent } from './components/carusel/carusel.component';

import { ConfigService } from './services/config.service';
import { MenuEffects } from './effects/menu.effects';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainPageComponent,
    AboutComponent,
    ContactsComponent,
    ServicesComponent,
    SpecialistsComponent,
    CaruselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularSvgIconModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      ConfigEffects,
      MenuEffects
    ]),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    ConfigService,
    { provide: LOCALE_ID, useValue: 'ru-RU' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private store: Store<State>) {
    this.store.dispatch(initApp());
  }
}
