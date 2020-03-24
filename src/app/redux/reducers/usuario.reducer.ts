import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioFail } from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
    id: string;
    user: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const usuarioInitialState: UsuarioState = {
    id: '',
    user: null,
    loaded: false,
    loading: false,
    error: null
}

const _usuarioReducer = createReducer(usuarioInitialState,

    on(cargarUsuario, (state, {id} ) => ({
         ...state,
         loading: true,
         id
    })),
    on(cargarUsuarioSuccess, (state, {usuario}) => ({ ...state,
            loading: false,
            loaded: true,
            user: {...usuario}
    })),
    on(cargarUsuarioFail, (state, {payload}) => ({ ...state,
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

export function usuarioReducer(state, action) {
    return _usuarioReducer(state, action);
}