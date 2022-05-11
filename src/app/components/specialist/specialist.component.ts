import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, first, Observable, Subscription } from 'rxjs';
import { clearDoctorsSpecServiceMap, SpecServiceMap } from 'src/app/actions/doctors-spec-service-map.actions';
import { Config } from 'src/app/interfaces/config';
import { Doctor } from 'src/app/interfaces/doctor';
import { State } from 'src/app/reducers';
import { configFeatureKey } from 'src/app/reducers/config.reducer';
import { doctorsSpecServiceMapFeatureKey } from 'src/app/reducers/doctors-spec-service-map.reducer';
import { doctorsFeatureKey } from 'src/app/reducers/doctors.reducer';
import { getDoctorSpecializationsString } from 'src/app/util/getDoctorSpecializations';

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.scss']
})
export class SpecialistComponent implements OnInit, OnDestroy {

  doctors$: Observable<Doctor[]>;
  doctorsSpecServiceMap$: Observable<SpecServiceMap>;
  config$: Observable<Config>;

  specId: string;
  displayedColumns = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ];

  private routeSub: Subscription;

  constructor(
    private store$: Store<State>,
    private route: ActivatedRoute
  ) {
    this.doctors$ = this.store$.pipe(
      select(doctorsFeatureKey),
      filter(val => Boolean(val))
    );
    this.doctorsSpecServiceMap$ = this.store$.pipe(
      select(doctorsSpecServiceMapFeatureKey),
      filter(val => Boolean(val))
    );
    this.config$ = this.store$.pipe(
      select(configFeatureKey),
      filter(val => Boolean(val)),
      first()
    );
    this.routeSub = this.route.params.subscribe(params => {
      this.specId = params['id'];
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.store$.dispatch(clearDoctorsSpecServiceMap());
  }

  getSpecs(doctors: Doctor[]): string[] {
    const doc = doctors?.find(doc => doc.id === parseInt(this.specId));

    return getDoctorSpecializationsString(doc);
  }

  getSpecsString(specs: string[]) {
    return specs?.join();
  }

  getDocInfo(doctors: Doctor[]): Doctor {
    return doctors?.find(doc => doc.id === parseInt(this.specId));
  }

  getImgPath(doctors: Doctor[]): string {
    return doctors
      ?.find(doc => doc.id === parseInt(this.specId))
      ?.attributes.doctorPhoto.data.attributes.formats.thumbnail.url;
  }

  getDataSource() {
    return [{
      monday: '9:00 - 18:00',
      tuesday: '9:00 - 18:00',
      wednesday: '9:00 - 18:00',
      thursday: '9:00 - 18:00',
      friday: '9:00 - 18:00',
      saturday: '9:00 - 18:00',
      sunday: '9:00 - 18:00',
    }];
  }
}
