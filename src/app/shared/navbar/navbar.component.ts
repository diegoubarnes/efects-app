import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('txtInput') txtInput: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  irUsuario(idUsuario: string) {
    if ( !idUsuario) {
      return;
    }
    this.router.navigate(['usuario', idUsuario]);
    this.txtInput.nativeElement.value = '';
  }

}
