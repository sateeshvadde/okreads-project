import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, markAsfinishedFromReadingList } from '@tmo/books/data-access';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store) {}
  
  markAsReadFromReadingList(item) {
    this.store.dispatch(markAsfinishedFromReadingList({ item }));
  }

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }
}
