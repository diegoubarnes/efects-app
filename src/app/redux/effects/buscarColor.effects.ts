import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as buscarColorActions from '../actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsuarioService } from './../../services/usuario.service';
import { of } from 'rxjs';


@Injectable()
export class BuscarColorEffects {

    constructor( private actions$: Actions, private BuscarColorServices: UsuarioService) {}

    cargarBuscarColor$ = createEffect(
        () => this.actions$.pipe(
            ofType(buscarColorActions.buscarColor),
            mergeMap(
                (actions) => this.BuscarColorServices.getColorById(actions.id)
                .pipe(
                    map( color => buscarColorActions.buscarColorSuccess({color})),
                    catchError(err => of(buscarColorActions.buscarColorFail({payload: err})))
                )
            )
        )
    );
}
