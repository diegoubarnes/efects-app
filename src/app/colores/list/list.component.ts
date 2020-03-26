import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Color } from './../../models/color.model';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducer';
import { cargarColores } from '../../redux/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  colores: Color[];
  loading: boolean;
  error: any;
  @ViewChild('txtInput') txtInput: ElementRef;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.select('colores').subscribe( ({colores, loading, error}) => {
      this.colores = colores;
      this.loading = loading;
      this.error = error;
    });
    this.store.dispatch(cargarColores());
  }

  BuscarColor(idColor: string) {
    if ( !idColor) {
      return;
    }
    this.router.navigate(['resultadoColores', idColor]);
    this.txtInput.nativeElement.value = '';
  }


}
