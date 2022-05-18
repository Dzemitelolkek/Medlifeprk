
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
import { SwiperModule } from "swiper/angular";
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { MarkdownModule } from 'ngx-markdown';

import { initApp } from './actions/init-app.actions';
import { reducers, metaReducers, State } from './reducers';

import { environment } from '../environments/environment';

import { ConfigEffects } from './effects/config.effects';
import { CaruselEffects } from './effects/carusel.effects';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ServicesComponent } from './components/services/services.component';
import { SpecialistsComponent } from './components/specialists/specialists.component';
import { CaruselComponent } from './components/carusel/carusel.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

import { ConfigService } from './services/config.service';
import { MenuEffects } from './effects/menu.effects';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopularServicesComponent } from './components/popular-services/popular-services.component';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { CaruselService } from './services/carusel.service';
import { CrudService } from './services/crud.service';
import { CompanyHistoryService } from './services/company-history.service';
import { CompanyHistoryEffects } from './effects/company-history.effects';
import { DoctorsService } from './services/doctors.service';
import { DoctorsEffects } from './effects/doctors.effects';
import { ServiceCategoryService } from './services/service-category.service';
import { ServiceCategoryEffects } from './effects/serviceCategory.effects';
import { LicensesService } from './services/licenses.service';
import { LicensesEffects } from './effects/licenses.effects';
import { ServiceService } from './services/services.service';
import { ServiceEffects } from './effects/service.effects';
import { SpecializationsEffects } from './effects/specializations.effects';
import { SpecializationsService } from './services/specializations.service';
import { GeneralInfoEffects } from './effects/general-info.effects';
import { GeneralInfoService } from './services/general-info.service';
import { SpecialistComponent } from './components/specialist/specialist.component';
import { DoctorsSpecServiceMapEffects } from './effects/doctors-spec-service-map.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './classes/custom-serializer';
import { ServiceComponent } from './components/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainPageComponent,
    AboutComponent,
    ContactsComponent,
    ServicesComponent,
    SpecialistComponent,
    SpecialistsComponent,
    CaruselComponent,
    HeaderComponent,
    FooterComponent,
    ScheduleComponent,
    PopularServicesComponent,
    ServiceComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
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
      MenuEffects,
      CaruselEffects,
      CompanyHistoryEffects,
      DoctorsEffects,
      ServiceCategoryEffects,
      LicensesEffects,
      ServiceEffects,
      SpecializationsEffects,
      GeneralInfoEffects,
      DoctorsSpecServiceMapEffects,
    ]),
    BrowserAnimationsModule,
    MaterialModule,
    SwiperModule,
    AngularYandexMapsModule,
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
    MarkdownModule.forRoot(),
  ],
  providers: [
    ConfigService,
    CaruselService,
    CompanyHistoryService,
    DoctorsService,
    ServiceCategoryService,
    LicensesService,
    ServiceService,
    SpecializationsService,
    GeneralInfoService,
    { provide: LOCALE_ID, useValue: 'ru-RU' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private store: Store<State>) {
    this.store.dispatch(initApp());
  }
}
