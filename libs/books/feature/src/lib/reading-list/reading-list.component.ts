import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '@tmo/shared/models';
import { getReadingList, removeFromReadingList, addToReadingList } from '@tmo/books/data-access';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);
 
  constructor(private readonly store: Store,
    private _snackBar: MatSnackBar) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
    const snackBarRef = this._snackBar.open('Removed', 'Undo', {
      duration: 10000
    });
    const { bookId, ...rest } = item;
    const book:Book = {
        id: bookId,
        ...rest
      };
    snackBarRef.onAction().subscribe(() => {
        this.store.dispatch(addToReadingList({ book }));
    });
  }
}
