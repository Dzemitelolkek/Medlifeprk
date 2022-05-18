import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, Observable } from 'rxjs';
import { GeneralInfo } from 'src/app/interfaces/generalInfo';
import { State } from 'src/app/reducers';
import { generalInfoFeatureKey } from 'src/app/reducers/general-info.reducer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  generalInfo$: Observable<GeneralInfo>;

  constructor( private store: Store<State> ) {
    this.generalInfo$ = this.store.pipe(
      select(generalInfoFeatureKey),
      filter(val => Boolean(val))
    );
  }

}
