import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions/usuarios.action';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsuarioService } from './../../services/usuario.service';
import { of } from 'rxjs';


@Injectable()
export class UsuariosEffects {

    constructor( private actions$: Actions, private usuariosServices: UsuarioService) {}

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuariosActions.cargarUsuarios),
            mergeMap(
                () => this.usuariosServices.getUsers().
                pipe(
                    map( user => usuariosActions.cargarUsuariosSuccess({usuarios: user})),
                    catchError(err => of(usuariosActions.cargarUsuariosFail({payload: err})))
                )
            )
        )
    );
}
