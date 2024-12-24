import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-state-discription',
  imports: [],
  templateUrl: './state-discription.component.html',
  styleUrl: './state-discription.component.scss'
})
export class StateDiscriptionComponent {

  @Input() data:any;

}
