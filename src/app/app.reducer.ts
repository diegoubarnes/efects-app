import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './redux/reducers';


export interface AppState {
   usuarios: reducers.UsuariosState;
   usuario: reducers.UsuarioState;
   colores: reducers.ColoresState;
   buscarColor: reducers.BuscarColorState;
}



export const appReducers: ActionReducerMap<AppState> = {
   usuarios: reducers.usuariosReducer ,
   usuario: reducers.usuarioReducer ,
   colores: reducers.coloresReducer ,
   buscarColor: reducers.buscarColorReducer ,
}