import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public images = {
    url_logo : 'https://thumbs.dreamstime.com/z/moderna-y-divertida-ilustraci%C3%B3n-negra-de-h%C3%A9roes-geniales-estilo-caricaturista-para-el-dise%C3%B1o-del-logo-162248226.jpg',
    url_user : 'https://cdn1.vectorstock.com/i/1000x1000/10/05/user-icon-vector-22391005.jpg'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
