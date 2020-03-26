import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/color.model';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducer';
import { ActivatedRoute } from '@angular/router';
import * as buscarColorActions from '../../redux/actions';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {
  color: Color;
  loading: boolean;
  error: any;

  constructor(private store: Store<AppState>, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.select('buscarColor').subscribe( ({color, loading, error}) => {
      this.color = color;
      this.loading = loading;
      this.error = error;
    });
    this.router.params.subscribe(({id}) => {
      this.store.dispatch(buscarColorActions.buscarColor({id}));
    });
  }

}
