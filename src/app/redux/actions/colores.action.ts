import { createAction, props } from '@ngrx/store';
import { Color } from './../../models/color.model';

export const cargarColores = createAction(
    '[Colores] cargar Colores'
    );
export const cargarColoresSuccess = createAction(
    '[Colores] cargar Colores Success',
        props<{colores: Color[]}>()
    );
export const cargarColoresFail = createAction(
    '[Colores] cargar Colores Fail',
        props<{payload: any}>()
    );
