import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from "../../UI/nav-bar/nav-bar.component";
import { CardsComponent } from "../../UI/cards/cards.component";
import { ApiService } from '../../api.service';
import { FooterComponent } from "../../UI/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, NavBarComponent, CardsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  constructor(private api:ApiService){}

  data:any;

  ngOnInit(){

 this.api.getProduct().subscribe((res:any) => {

  this.data=res.products;
  console.log(this.data);

 });
 

  }

}
