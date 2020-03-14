import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeadlineService {
  title = '';
  description = '';

  setTitle = (title: string) => {
    this.title = title;
    this.description = null;

    if (title) {
      document.title = `${title} | MEAN Material Auth`;
    } else {
      document.title = 'MEAN Material Auth';
    }
  }

  setDescription = (description: string) => this.description = description;
}
