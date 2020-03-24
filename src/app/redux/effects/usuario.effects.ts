import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsuarioService } from './../../services/usuario.service';
import { of } from 'rxjs';


@Injectable()
export class UsuarioEffects {

    constructor( private actions$: Actions, private usuarioServices: UsuarioService) {}

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuarioActions.cargarUsuario),
            mergeMap(
                (actions) => this.usuarioServices.getUserById(actions.id).
                pipe(
                    map( user => usuarioActions.cargarUsuarioSuccess({usuario: user})),
                    catchError(err => of(usuarioActions.cargarUsuarioFail({payload: err})))
                )
            )
        )
    );
}
