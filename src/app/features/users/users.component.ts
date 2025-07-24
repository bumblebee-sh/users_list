import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './interfaces';
import { LoaderComponent } from '@app/shared/UI';
import { UsersTableComponent } from './components';

@Component({
  selector: 'app-users',
  imports: [LoaderComponent, UsersTableComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  public users: User[] | null = null;
  public loading: boolean = true;
  constructor(private readonly usersService: UsersService) {}

  ngOnInit() {
    this.loading = true;
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
      this.loading = false;
    });
  }
}
