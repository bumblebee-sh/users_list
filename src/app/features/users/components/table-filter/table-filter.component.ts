import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { SearchFilterDto } from '@app/features/users/dto/search-filter.dto';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-table-filter',
  imports: [NzInputModule, NzSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './table-filter.component.html',
  styleUrl: './table-filter.component.scss'
})
export class TableFilterComponent implements OnInit, OnDestroy {
  @Output() filterChange = new EventEmitter<SearchFilterDto>();

  // TODO: use form builder
  public form = new FormGroup({
    search: new FormControl(''),
  });

  private readonly debounceTime = 300;
  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.form.get('search')?.valueChanges.pipe(
      debounceTime(this.debounceTime),
      distinctUntilChanged(),
      takeUntil(this.destroy$),
    ).subscribe(() => {
      this.emitFilterChange();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  } 

  private emitFilterChange() {
    this.filterChange.emit({
      search: this.form.get('search')?.value || '',
    });
  }
}
