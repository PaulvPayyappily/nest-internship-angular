import { Component } from '@angular/core';
import { NavbarComponent } from '../../UI/navbar/navbar.component';
import { FooterComponent } from '../../UI/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { StateDiscriptionComponent } from "../../UI/state-discription/state-discription.component";
import { ApiService } from '../../api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-single-state',
  imports: [NavbarComponent, FooterComponent, StateDiscriptionComponent],
  templateUrl: './single-state.component.html',
  styleUrl: './single-state.component.scss'
})

export class SingleStateComponent {
  navSinglestate:any;

  footerSinglestate:any;

  

  constructor(private activated:ActivatedRoute,public api:ApiService,private titleService:Title){

  }
  
  




 data:any

 ngOnInit() {

  let id = this.activated.snapshot.paramMap.get("id")
  this.data = this.api.getStatesById(id);
  
 this.titleService.setTitle(`${this.data.title} Tourism`)

  this.navSinglestate={title:`Discover ${this.data.title}`}

  this.footerSinglestate={title:`${this.data.title} Tourism`}

}




}
