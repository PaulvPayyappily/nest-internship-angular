import { Component } from '@angular/core';
import { NavbarComponent } from "../../UI/navbar/navbar.component";
import { Title } from '@angular/platform-browser';
import { CardsComponent } from '../../UI/cards/cards.component';
import { FooterComponent } from "../../UI/footer/footer.component";
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-states',
  imports: [NavbarComponent, CardsComponent, FooterComponent],
  templateUrl: './states.component.html',
  styleUrl: './states.component.scss'
})
export class StatesComponent {

  navStates={title:"Explore the States of India"}

  
  footerStates={title:"Indian States Tourism"}

  constructor(public api:ApiService){



  }

 states:any

 ngOnInit() {

  this.states = this.api.getStaes();

}

}
