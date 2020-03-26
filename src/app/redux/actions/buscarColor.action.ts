import { createAction, props } from '@ngrx/store';
import { Color } from './../../models/color.model';

export const buscarColor = createAction(
    '[Buscar Color] buscar Color',
    props<{id: string}>()
    );
export const buscarColorSuccess = createAction(
    '[Buscar Color] buscar Color Success',
    props<{color: Color}>()
    );
export const buscarColorFail = createAction(
    '[Buscar Color] buscar Color Fail',
    props<{payload: any}>()
    );

