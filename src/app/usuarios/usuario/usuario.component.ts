import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as usuarioIdAction from './../../redux/actions/usuario.action';
import { AppState } from './../../app.reducer';
import { Usuario } from './../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;
  loading: boolean;
  error: any;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('usuario').subscribe( ({user, loading, error}) => {
      this.usuario = user;
      this.loading = loading;
      this.error = error;
    });
    this.router.params.subscribe( ({id}) => {
      this.store.dispatch(usuarioIdAction.cargarUsuario({id}));
    });
  }

}
