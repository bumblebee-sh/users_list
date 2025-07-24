import { Component, Input, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { User } from '../../interfaces';
import { TableHeader } from './interfaces/table-header.interface';
import { TABLE_CONFIG } from './table.config';
import { TableFilterComponent } from '../table-filter/table-filter.component';
import { DatePipe } from '@angular/common';
import { SearchFilterDto } from '../../dto/search-filter.dto';

@Component({
  selector: 'app-users-table',
  imports: [NzTableModule, TableFilterComponent, DatePipe],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss'
})
export class UsersTableComponent implements OnInit {
  @Input({ required: true }) users: User[] = [];

  public headerColumn: TableHeader<User>[] = TABLE_CONFIG;

  public displayedUsers: User[] = [];
  public filteredUsers: User[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.users) {
      this.displayedUsers = this.users;
    }
  }

  public onFilterChange(filter: SearchFilterDto) {
    this.applyFilters(filter);
  }

  private applyFilters(filter: SearchFilterDto) {
    let filteredUsers = [...this.users];

    if (filter.search) {
      filteredUsers = filteredUsers.filter((user) => {
        // set of searchable fields
        const searchFields = [user.firstName, user.lastName, user.title];

        return searchFields.some((field) =>
          field.toLowerCase().includes(filter.search.toLowerCase()),
        );
      });
    }

    this.displayedUsers = filteredUsers;
  }
}
