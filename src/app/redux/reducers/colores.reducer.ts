import { createReducer, on } from '@ngrx/store';
import { cargarColores, cargarColoresSuccess, cargarColoresFail } from '../actions';
import { Color } from './../../models/color.model';

export interface ColoresState {
    colores: Color[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const coloresInitialState: ColoresState = {
    colores: [],
    loaded: false,
    loading: false,
    error: null
}

const _coloresReducer = createReducer(coloresInitialState,

    on(cargarColores, state => ({
         ...state,
         loading: true
    })),
    on(cargarColoresSuccess, (state, {colores}) => ({
         ...state,
        loading: false,
        loaded: true,
        colores: [...colores]
    })),
    on(cargarColoresFail, (state, {payload}) => ({
         ...state,
        loading: false,
        loaded: true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message,
            status: payload.status,
        }
    })),

);

export function coloresReducer(state, action) {
    return _coloresReducer(state, action);
}
