import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StatesComponent } from "./pages/states/states.component";
import { KeralaComponent } from "./pages/kerala/kerala.component";
import { NotfoundComponent } from "./pages/notfound/notfound.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KeralaComponent, NotfoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
