import { User } from "@app/features/users/interfaces";
import { TableHeader } from "./interfaces/table-header.interface";

export const TABLE_CONFIG: TableHeader<User>[] = [
  {
    title: 'First Name',
    sortFn: (a: User, b: User) => a.firstName.localeCompare(b.firstName),
    key: 'firstName',
  },
  {
    title: 'Last Name',
    sortFn: (a: User, b: User) => a.lastName.localeCompare(b.lastName),
    key: 'lastName',
  },
  {
    title: 'Date of Birth',
    sortFn: (a: User, b: User) =>
      new Date(a.dob).getTime() - new Date(b.dob).getTime(),
    key: 'dob',
  },
  {
    title: 'Title',
    sortFn: (a: User, b: User) => a.title.localeCompare(b.title),
    key: 'title',
  },
  {
    title: 'Phone Number',
    key: 'phone',
  },
];