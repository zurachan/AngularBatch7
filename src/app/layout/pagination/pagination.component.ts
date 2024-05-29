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

  @Input() paging: Pagination;
  @Output() pageChangeEvent = new EventEmitter<any>();
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit() {}
  ngDoCheck(): void {}
  ngAfterContentInit(): void {}
  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }
  ngAfterViewInit(): void {}
  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  pageChange(number?: number, size?: number) {
    this.pageChangeEvent.emit({ number: number, size: size });
  }
}
