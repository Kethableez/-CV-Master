import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { filter, map } from 'rxjs';
import { max } from '../core/utils/max';
import { ContentComponent } from './components/content/content.component';
import { ContentService } from './services/content.service';

@Component({
  selector: 'ktbz-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss'],
})
export class CreatorComponent {
  rmTrigger$ = this.contentService.removeContentTrigger$.asObservable().pipe(
    filter((idx) => idx !== -1),
    map((idx) => {
      this.contents.remove(this.contentIndices.findIndex((val) => val === idx));
      this.contentIndices = this.contentIndices.filter((v) => v !== idx);
    })
  );

  @ViewChild('contents', { read: ViewContainerRef })
  contents!: ViewContainerRef;

  contentIndices: number[] = [];

  constructor(private contentService: ContentService) {}

  addContent(type: string) {
    const idx = max(this.contentIndices) + 1 || 0;
    const ref = this.contents.createComponent(ContentComponent);
    ref.setInput('selfIndex', idx);
    ref.setInput('type', type);
    this.contentIndices.push(idx);
  }
}
