import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { configFeatureKey } from 'src/app/reducers/config.reducer';
import { Config } from 'src/app/interfaces/config';
import { Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';
import { menuElementsFeatureKey } from 'src/app/reducers/menu-elements.reducer';
import { currentPageFeatureKey } from 'src/app/reducers/current-page.reducer';
import { Element, setCurrent } from 'src/app/actions/menu.actions';
import { GeneralInfo } from 'src/app/interfaces/generalInfo';
import { generalInfoFeatureKey } from 'src/app/reducers/general-info.reducer';
import { AnaliticService } from 'src/app/services/analitic.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Стримы
  readonly config$: Observable<Config>;
  generalInfo$: Observable<GeneralInfo>;
  menuElements$: Observable<Element[] | string[]>;
  currentPage$: Observable<number>;

  constructor(
    private store: Store<State>,
    private analiticService: AnaliticService,
  ) {
    this.config$ = this.store.pipe(
      select(configFeatureKey),
      filter(val => Boolean(val)),
      first()
    );
    this.generalInfo$ = this.store.pipe(
      select(generalInfoFeatureKey),
      filter(val => Boolean(val))
    );
    this.menuElements$ = this.store.pipe(
      select(menuElementsFeatureKey),
      filter(val => Boolean(val)),
      first()
    );
    this.currentPage$ = this.store.pipe(
      select(currentPageFeatureKey)
    );
  }

  setCurrent(tab: number): void {
    this.store.dispatch(setCurrent({current: tab}));
  }
}
