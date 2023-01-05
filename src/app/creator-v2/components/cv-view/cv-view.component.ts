import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ktbz-cv-view',
  templateUrl: './cv-view.component.html',
  styleUrls: ['./cv-view.component.scss']
})
export class CvViewComponent implements OnInit {

  @Input() theme = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
