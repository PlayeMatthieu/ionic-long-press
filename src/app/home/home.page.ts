import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  constructor() {}

  public isScrolling = false;

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  onScroll(event: any): void {
    if (event.detail.deltaY > 0 || event.detail.deltaY < 0) {
      this.isScrolling = true;
      console.log('scrolling');
    } else if (event.detail.deltaY === 0) {
      this.isScrolling = true;
        console.log('end of scrolling');
    }

    setTimeout(() => {
      this.isScrolling = false;
    }, 1000)
  }

  toggleLongPress(): void {
    if (!this.isScrolling) {
      console.error('<!!>longpress<!!>')
    }
  }
}
