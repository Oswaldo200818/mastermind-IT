import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
  }

  shrinkHeader:boolean = false;
  colorHeader:String = 'transparent';
  colorText:String = '';


  @HostListener('window:scroll', [])
  onWindowScroll() {
    setTimeout(() =>{
      const scrollY = window.scrollY;
      if (scrollY > 30) {
        this.shrinkHeader = true;
        this.colorHeader = '#fff';
      } else {
        this.shrinkHeader = false;
        this.colorHeader = 'transparent';
      }
    },100);

  }
}
