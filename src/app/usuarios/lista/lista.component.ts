import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducer';
import { cargarUsuarios } from '../../redux/actions/usuarios.action';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[];
  loading: boolean;
  error: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('usuarios').subscribe( ({users, loading, error}) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    });
    this.store.dispatch(cargarUsuarios());
  }
}
