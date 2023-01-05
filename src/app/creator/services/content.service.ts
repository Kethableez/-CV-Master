import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ContentService {

  removeContentTrigger$ = new BehaviorSubject<number>(-1);
  removeItemTrigger$ = new BehaviorSubject<string>('-1');

  constructor() { }

  contentTrigger(idx: number) {
    this.removeContentTrigger$.next(idx);
  }

  itemTrigger(idx: string) {
    this.removeItemTrigger$.next(idx);
  }

}
