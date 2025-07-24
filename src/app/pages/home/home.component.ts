import { Component } from '@angular/core';
import { UsersComponent } from '@app/features';

@Component({
  selector: 'app-home',
  imports: [
    UsersComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
