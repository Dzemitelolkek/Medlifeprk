import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MenuActionTypes, elementsLoaded, loadElements, setCurrent } from '../actions/menu.actions';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from './../reducers/index';
import { tap } from 'rxjs/operators';

const elements = [
{name: 'ГЛАВНАЯ', path: 'main'},
{name: 'О КЛИНИКЕ', path: 'about'},
{name: 'СПЕЦИАЛИСТЫ', path: 'specialists'},
{name: 'УСЛУГИ', path: 'services'},
{name: 'ДЛЯ ПАЦИЕНТА', path: 'for-patient'},
{name: 'КОНТАКТЫ', path: 'contacts'},
{name: 'ОТЗЫВЫ', path: 'comments'}
];

@Injectable()
export class MenuEffects {

  startToLoadElements$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('[App] Init app'),
      map(() => loadElements()),
      // tap(() => {
      //   this.store.dispatch(setCurrent({current: 0}));
      // })
    );
  });

  loadElements$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MenuActionTypes.LoadElements),
      map(() => elementsLoaded({ elements }))
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<State>
  ) { }

}
