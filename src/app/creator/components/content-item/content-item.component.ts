import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'ktbz-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss'],
})
export class ContentItemComponent {
  @Input() selfIndex = -1;
  @Input() parentIndex = -1;
  @Input() type = '';
  @HostListener('document:click', ['$event']) documentClick(event: Event) {
    this.focus = this.eRef.nativeElement.contains(event.target);
  }

  focus = false;

  constructor(
    private contentService: ContentService,
    private eRef: ElementRef
  ) {}

  removeSelf() {
    this.contentService.itemTrigger(`${this.parentIndex}:${this.selfIndex}`);
  }
}
