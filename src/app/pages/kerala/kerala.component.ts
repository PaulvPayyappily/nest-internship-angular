import { Component } from '@angular/core';
import { NavbarComponent } from "../../UI/navbar/navbar.component";
import { FooterComponent } from '../../UI/footer/footer.component';

@Component({
  selector: 'app-kerala',
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './kerala.component.html',
  styleUrl: './kerala.component.scss'
})
export class KeralaComponent {

  navKerala={title:"Discover Kerala"}

  footerKerala={title:"Kerala Tourism"}

}
