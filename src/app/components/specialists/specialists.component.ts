import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, first, map, Observable } from 'rxjs';
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
export class SpecialistsComponent implements AfterContentChecked {

  @Input()
  sizeSmall = null;
  @Input()
  specId = null;
  
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

  ngAfterContentChecked() {
    if (this.specId) {
      this.doctors$ = this.doctors$.pipe(
        map(docs => docs.filter(
          doc => doc.attributes.specializations.data.find(
            spec => spec.id === this.specId
          )
        ))
      );
    }
  }

  getSpecsString(doc: Doctor): string {
    return getDoctorSpecializationsString(doc).join(', ');
  }

  getImgPath(doc: Doctor): string {
    return doc?.attributes.doctorPhoto.data?.attributes.formats.thumbnail.url;
  }
  
  getDoctorUrl(doc: Doctor): string {
    return `/specialist/${doc.id}`;
  }
}
