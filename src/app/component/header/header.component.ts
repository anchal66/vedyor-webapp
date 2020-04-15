import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currRoute;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
        console.log(event.url);
        if(event.url === '/'){
          this.currRoute = 'Home'
        }
        if(event.url === '/services'){
          this.currRoute = 'Our Services'
        }
        if(event.url === '/aboutus'){
          this.currRoute = 'About Us'
        }
        if(event.url === '/contactus'){
          this.currRoute = 'Contact Us'
        }
        if(event.url === '/corona'){
          this.currRoute = 'Corona Virus'
        }
        if(event.url === '/solutions'){
          this.currRoute = 'Explore Our Solutions'
        }
      }
    });

  }

}
