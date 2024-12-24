import { Component } from '@angular/core';
import { NavbarComponent } from "../../UI/navbar/navbar.component";
import { CarouselComponent } from "../../UI/carousel/carousel.component";
import { Title } from '@angular/platform-browser';
import { AboutComponent } from "../../UI/about/about.component";
import { FooterComponent } from "../../UI/footer/footer.component";
import { CarouselModule,OwlOptions } from 'ngx-owl-carousel-o';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-home',
  imports: [NavbarComponent, AboutComponent, FooterComponent,NgFor,CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

 carouselHome = [
    {
      id: 1,
      image: "indian-travel-destination-beautiful-attractive.jpg",
      title: "Discover the Beauty of India",
      description: "Explore the rich culture, diverse landscapes, and iconic landmarks.",
    },
    {
      id: 2,
      image: "beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds.jpg",
      title: "A Land of Diversity",
      description: "From snow-capped mountains to sandy beaches, experience it all.",
    },
    {
      id: 3,
      image: "aerial-beautiful-shot-seashore-with-hills-background-sunset.jpg",
      title: "Vibrant Culture Awaits",
      description: "Immerse yourself in the colorful festivals and traditions of India.",
    }
  ];

  aboutHome={title:"About Indian Tourism",description:"India is a land of diverse cultures, traditions, and natural beauty. From the snowy peaks of the Himalayas to the sandy beaches of Goa, India offers a variety of travel experiences for every traveler. Discover the vibrant cities, majestic forts, temples, and beaches that make India an unforgettable destination."}

  footerHome={title:"Indian Tourism"}

 navHome={title:"Indian Tourism",image:"download.png"}


 customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 1500,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 1
    }
  },
  nav: true,
  autoplay: true, 
  autoplayTimeout: 4500, 
  autoplayHoverPause: true,
  autoplaySpeed: 2500,  

}
}
