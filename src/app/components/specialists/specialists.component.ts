import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, first, Observable } from 'rxjs';
import { Config } from 'src/app/interfaces/config';
import { Doctor } from 'src/app/interfaces/doctor';
import { State } from 'src/app/reducers';
import { configFeatureKey } from 'src/app/reducers/config.reducer';
import { doctorsFeatureKey } from 'src/app/reducers/doctors.reducer';
import { getDoctorSpecializationsString } from 'src/app/util/getDoctorSpecializations';

@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.scss']
})
export class SpecialistsComponent implements OnInit {

  doctors$: Observable<Doctor[]>;
  config$: Observable<Config>;

  constructor(
    private store$: Store<State>
  ) {
    this.doctors$ = this.store$.pipe(
      select(doctorsFeatureKey),
      filter(val => Boolean(val))
    );
    this.config$ = this.store$.pipe(
      select(configFeatureKey),
      filter(val => Boolean(val)),
      first()
    );
  }

  ngOnInit() {
  }

  getSpec(doc: Doctor): string {
    return getDoctorSpecializationsString(doc);
  }

  getImgPath(doc: Doctor): string {
    return doc.attributes.doctorPhoto.data.attributes.formats.thumbnail.url;
  }
}
