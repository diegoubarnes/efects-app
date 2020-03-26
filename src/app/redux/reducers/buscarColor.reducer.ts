import { createReducer, on } from '@ngrx/store';
import { buscarColor, buscarColorSuccess, buscarColorFail } from './../actions';
import { Color } from './../../models/color.model';

export interface BuscarColorState {
    id: string;
    color: Color;
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const buscarColorInitialState: BuscarColorState = {
    id: '',
    color: null,
    loaded: false,
    loading: false,
    error: null,
}

const _buscarColorReducer = createReducer(buscarColorInitialState,

    on(buscarColor, (state, {id}) => ({
         ...state,
         loading: true,
         id
    })),
    on(buscarColorSuccess, (state, {color}) => ({ ...state,
        loading: false,
        loaded: true,
        color: {...color}
    })),
    on(buscarColorFail, (state, {payload}) => ({ ...state,
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

export function buscarColorReducer(state, action) {
    return _buscarColorReducer(state, action);
}
