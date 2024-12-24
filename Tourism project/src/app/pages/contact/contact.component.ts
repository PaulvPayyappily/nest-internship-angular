import { Component } from '@angular/core';
import { NavbarComponent } from "../../UI/navbar/navbar.component";
import { FooterComponent } from "../../UI/footer/footer.component";

@Component({
  selector: 'app-contact',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  navContact={title:"Contact"}

  footerContact={title:"Indian Tourisum"}

  

}
