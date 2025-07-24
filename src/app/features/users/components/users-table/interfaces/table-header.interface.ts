import { NzTableSortFn } from 'ng-zorro-antd/table';

export interface TableHeader<T> {
  title: string;
  sortFn?: NzTableSortFn<T>;
  key: keyof T;
}