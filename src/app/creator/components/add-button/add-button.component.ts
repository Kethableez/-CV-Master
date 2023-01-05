import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { buttons } from '../../consts/buttons';

@Component({
  selector: 'ktbz-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent {
  @Input() type = 'content';
  @Output() clicked = new EventEmitter<string>();
  @HostListener('document:click', ['$event']) documentClick(event: Event) {
    this.expanded = this.eRef.nativeElement.contains(event.target);
  }

  expanded = false;

  get buttons() {
    return buttons[this.type];
  }

  constructor(private eRef: ElementRef) {}

  expand() {
    this.expanded = true;
  }

  buttonClicked(type: string) {
    this.clicked.emit(type);
  }
}
