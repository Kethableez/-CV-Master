import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ktbz-a4-view',
  templateUrl: './a4-view.component.html',
  styleUrls: ['./a4-view.component.scss'],
})
export class A4ViewComponent implements AfterViewInit, OnChanges {
  @Input() pageSize: 'A3' | 'A4' = 'A4';
  @Input() scale = 1.5
  @ViewChild('paginatedView') paginatedView!: ElementRef<HTMLDivElement>;
  @ViewChild('contentWrapper') contentWrapper!: ElementRef<HTMLDivElement>;
  @ContentChildren('pageContent', { read: ElementRef })
  elements!: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit(): void {
    this.updatePages();
    this.elements.changes.subscribe(() => {
      this.updatePages();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['scale'].firstChange) {
      this.updatePages();
    }
  }

  updatePages(): void {
    this.paginatedView.nativeElement.innerHTML = '';
    let page = this.getNewPage();
    this.paginatedView.nativeElement.appendChild(page);
    let lastEl: HTMLElement | undefined;
    this.elements.forEach((elRef) => {
      const el = elRef.nativeElement;
      if (el.clientHeight > page.clientHeight) {
        return;
      }
      page.appendChild(el);
      if (page.scrollHeight > page.clientHeight) {
        page = this.getNewPage();
        this.paginatedView.nativeElement.appendChild(page);
        page.appendChild(el);
      }
      lastEl = el;
    });

    if (lastEl) {
      lastEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  getNewPage(): HTMLDivElement {
    const page = document.createElement('div');
    page.classList.add('page');
    page.classList.add(this.pageSize);
    page.style.scale = String(this.scale);
    return page;
  }
}
