import { Injectable } from '@angular/core';
import { MetaData } from '../models/meta-data.model';

@Injectable({providedIn: 'root'})
export class DataService {

  private storage = localStorage;

  constructor() { }

  saveData(meta: MetaData) {
    this.storage.setItem('meta', JSON.stringify(meta))
  }

  getData() {
    JSON.parse(this.storage.getItem('meta') as string) as MetaData
  }

  clear() {
    this.storage.removeItem('meta');
  }

  hasValidData() {
    return !!this.storage.getItem('meta')
  }
}
