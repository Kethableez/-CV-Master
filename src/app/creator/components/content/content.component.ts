import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { filter, map } from 'rxjs';
import { max } from 'src/app/core/utils/max';
import { contentTypes } from '../../consts/content-types';
import { ContentService } from '../../services/content.service';
import { ContentItemComponent } from '../content-item/content-item.component';

@Component({
  selector: 'ktbz-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  rmTrigger$ = this.contentService.removeItemTrigger$.asObservable().pipe(
    filter(() => !!this.items),
    filter((idx) => idx !== '-1'),
    filter((idx) => Number(idx.split(':')[0]) === this.selfIndex),
    map((idx) => {
      const index = Number(idx.split(':')[1]);
      this.items.remove(this.itemIndices.findIndex((val) => val === index));
      this.itemIndices = this.itemIndices.filter((v) => v !== index);
      this.focus = true;
    })
  );

  @Input() selfIndex = -1;
  @Input() type = '';
  @ViewChild('items', { read: ViewContainerRef }) items!: ViewContainerRef;
  @HostListener('document:click', ['$event']) documentClick(event: Event) {
    this.focus = this.eRef.nativeElement.contains(event.target);
  }

  focus = false;
  itemIndices: number[] = [];

  get title() {
    return contentTypes[this.type];
  }

  constructor(
    private contentService: ContentService,
    private eRef: ElementRef
  ) {}

  addItem() {
    const idx = max(this.itemIndices) + 1 || 0;
    const ref = this.items.createComponent(ContentItemComponent);
    ref.setInput('selfIndex', idx);
    ref.setInput('parentIndex', this.selfIndex);
    ref.setInput('type', this.type);
    this.itemIndices.push(idx);
  }

  removeSelf() {
    this.contentService.contentTrigger(this.selfIndex);
  }
}
