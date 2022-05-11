import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, Observable } from 'rxjs';
import { GeneralInfo } from 'src/app/interfaces/generalInfo';
import { State } from 'src/app/reducers';
import { generalInfoFeatureKey } from 'src/app/reducers/general-info.reducer';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  generalInfo$: Observable<GeneralInfo>;

  constructor(private store$: Store<State>) {
    this.generalInfo$ = this.store$.pipe(
      select(generalInfoFeatureKey),
      filter(val => Boolean(val))
    );
  }

  ngOnInit() {
  }

  normalizePhones(phones: any[]): string {
    return phones?.map(p => p.phone).join(', ')
  }

  getCoordinates(coordinates: string): string[] {
    return coordinates?.split(', ');
  }
}
