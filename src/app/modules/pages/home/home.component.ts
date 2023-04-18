import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('aboutFadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100px)' }),
        animate('1s ease-in-out', style({ opacity: 1, transform: 'translateX(10)' }))
      ])
    ])
  ]

})
export class HomeComponent implements OnInit {
  aboutVisible:boolean = false;
  servicesVisible:boolean = false;
  blogVisible:boolean = false;
  contactVisible:boolean = false;
  shrinkHeader:boolean = false;
  colorHeader:String = 'transparent';
  colorText:String = '';

  constructor() {

  }

  ngOnInit(): void {
  }


  /**
   * Función checkVisibility que verifica la posición del elemento y el alto de la ventana del navegador.
   *
   * @param positionSection obtiene la posición del border superior del elemento con getBoundingClientRect()
   * @param windowsHeight obtiene el alto de la ventana del navegador
   */
  checkAboutVisibility(): void {
    const about = document.getElementById('about');
    if (about) {
      const position = about.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (position < windowHeight) {
        this.aboutVisible = true;
        about.classList.add('visible');
      }
    }
  }

  checkVisibility(): void {
    const about = document.getElementById('about');
    if (about) {
      const position = about.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (position < windowHeight) {
        this.aboutVisible = true;
        about.classList.add('visible');
      }
    }

    const services = document.getElementById('services');
    if (services) {
      const position = services.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (position < windowHeight) {
        this.servicesVisible = true;
        services.classList.add('visible');
      }
    }

    const blog = document.getElementById('blog');
    if (blog) {
      const position = blog.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (position < windowHeight) {
        this.blogVisible = true;
        blog.classList.add('visible');
      }
    }

    const contact = document.getElementById('contact');
    if (contact) {
        const position = contact.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight) {
            this.contactVisible = true;
            contact.classList.add('visible');
        }
    }
  }



  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
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
