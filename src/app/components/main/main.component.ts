import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { configFeatureKey } from 'src/app/reducers/config.reducer';
import { Config } from 'src/app/interfaces/config';
import { Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';
import { menuElementsFeatureKey } from 'src/app/reducers/menu-elements.reducer';
import { currentPageFeatureKey } from 'src/app/reducers/current-page.reducer';
import { Element, setCurrent } from 'src/app/actions/menu.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  // Стримы
  readonly config$: Observable<Config>;
  menuElements$: Observable<string[] | Element[]>;
  currentPage$: Observable<number>;

  constructor(
    private store: Store<State>,
  ) {
    this.config$ = this.store.pipe(
      select(configFeatureKey),
      filter(val => Boolean(val)),
      first()
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
