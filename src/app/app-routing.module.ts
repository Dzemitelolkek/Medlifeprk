import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigResolver } from './resolvers/config.resolver';
import {MainComponent} from './components/main/main.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutComponent } from './components/about/about.component';
import { SpecialistsComponent } from './components/specialists/specialists.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SpecialistComponent } from './components/specialist/specialist.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: '',
    component: MainComponent,
    // canActivate: [
    //   AuthGuard
    // ],
    children: [
      {
        path: 'main',
        component: MainPageComponent,
        pathMatch: 'full',
        resolve: {
          config: ConfigResolver
        }
      },
      {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full',
        resolve: {
          config: ConfigResolver
        }
      },
      {
        path: 'specialists',
        component: SpecialistsComponent,
        pathMatch: 'full',
        resolve: {
          config: ConfigResolver
        }
      },
      {
        path: 'specialist/:id',
        component: SpecialistComponent,
        pathMatch: 'full',
        resolve: {
          config: ConfigResolver
        }
      },
      {
        path: 'services',
        component: ServicesComponent,
        pathMatch: 'full',
        resolve: {
          config: ConfigResolver
        }
      },
      {
        path: 'service/:id',
        component: ServiceComponent,
        pathMatch: 'full',
        resolve: {
          config: ConfigResolver
        }
      },
      {
        path: 'contacts',
        component: ContactsComponent,
        pathMatch: 'full',
        resolve: {
          config: ConfigResolver
        }
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
        pathMatch: 'full',
        resolve: {
          config: ConfigResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
