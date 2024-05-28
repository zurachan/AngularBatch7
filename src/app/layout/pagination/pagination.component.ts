import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Pagination } from 'src/app/model/Pagination';

interface Page {
  firstPage: number;
  lastPage: number;
  totalPages: number;
  totalRecords: number;
  currentRecords: number;
  nextPage: number;
  previousPage: number;
  pageSize: number;
  pageNumber: number;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked
{
  constructor(private cdr: ChangeDetectorRef) {}

  @Input() paging!: Pagination;
  @Output() pageChangeEvent = new EventEmitter<any>();
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit() {}
  ngDoCheck(): void {
    console.log('DoCheck');
    console.log(this.paging);
  }
  ngAfterContentInit(): void {}
  ngAfterContentChecked(): void {
    console.log('after content checked');
    console.log(this.paging);
    this.cdr.detectChanges();
  }
  ngAfterViewInit(): void {
    console.log('after view init');
  }
  ngAfterViewChecked(): void {
    console.log('after view checked');
  }

  pageChange(number?: number, size?: number) {
    this.pageChangeEvent.emit({ number: number, size: size });
  }
}
