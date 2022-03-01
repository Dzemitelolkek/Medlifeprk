import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MenuActionTypes, elementsLoaded, loadElements, setCurrent } from '../actions/menu.actions';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from './../reducers/index';
import { tap } from 'rxjs/operators';

const elements = [
{name: 'Главная', path: 'main'},
{name: 'Услуги', path: 'services'},
{name: 'О клинике', path: 'about'},
{name: 'Специалисты', path: 'specialists'},
{name: 'Расписание', path: 'schedule'}, 
{name: 'Контакты', path: 'contacts'},
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
