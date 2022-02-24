import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
  reset,
} from './../+state/counter/counter.actions';
import * as fromCounter from './../+state/counter/counter.reducer';

@Component({
  selector: 'nx-tutorial-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent {
  count = 0;

  constructor(private store: Store<{ counter: number }>) {
    store.select(fromCounter.COUNTER_FEATURE_KEY).subscribe((state) => {
      console.log(state);
      this.count = state;
    });
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
