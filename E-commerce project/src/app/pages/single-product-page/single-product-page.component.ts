import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';
import { NavBarComponent } from '../../UI/nav-bar/nav-bar.component';
import { NgIf } from '@angular/common';
import { FooterComponent } from "../../UI/footer/footer.component";

@Component({
  selector: 'app-single-product-page',
  imports: [NavBarComponent, NgIf, FooterComponent,RouterLink],
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.scss'
})
export class SingleProductPageComponent {

  constructor(private activated:ActivatedRoute,private api:ApiService){

  }

  product:any;

  ngOnInit():void{

    let id = this.activated.snapshot.paramMap.get("id");
    this.api.getProductsById(id).subscribe((res: any) => {
      this.product = res;
      console.log(this.product);
      

    });
  }

}
