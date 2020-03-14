import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeadlineService {
  private currentTitle = '';
  private currentDescription = '';

  get title() { return this.currentTitle; }
  get description() { return this.currentDescription; }

  setTitle = (title: string) => {
    this.currentTitle = title;
    this.currentDescription = null;

    if (title) {
      document.title = `${title} | MEAN Material Auth`;
    } else {
      document.title = 'MEAN Material Auth';
    }
  }

  setDescription = (description: string) => this.currentDescription = description;
}
