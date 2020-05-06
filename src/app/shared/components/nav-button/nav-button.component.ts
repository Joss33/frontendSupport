import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  buttonNav() {
    const botoncitoClient = document.getElementById('botoncito__Client');
    const botoncitoSupport = document.getElementById('botoncito__Support');

    botoncitoClient.classList.toggle('botoncito__Client');
    botoncitoClient.classList.toggle('boton');
    botoncitoSupport.classList.toggle('botoncito__Support');
    botoncitoSupport.classList.toggle('boton');
  }
}
