import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './usuarios/lista/lista.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';


export const routes: Routes = [
  {path: 'home', component: ListaComponent},
  {path: 'usuario/:id', component: UsuarioComponent},
  {path: '**', redirectTo: 'home' },
];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
],
})
export class AppRoutingModule { }
