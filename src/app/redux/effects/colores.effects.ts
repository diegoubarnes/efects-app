import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as coloresActions from '../actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsuarioService } from './../../services/usuario.service';
import { of } from 'rxjs';


@Injectable()
export class ColoresEffects {

    constructor( private actions$: Actions, private coloresServices: UsuarioService) {}

    cargarcolores$ = createEffect(
        () => this.actions$.pipe(
            ofType(coloresActions.cargarColores),
            mergeMap(
                () => this.coloresServices.getColors().
                pipe(
                    map( color => coloresActions.cargarColoresSuccess({colores: color})),
                    catchError(err => of(coloresActions.cargarColoresFail({payload: err})))
                )
            )
        )
    );
}
