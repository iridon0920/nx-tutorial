import { createReducer, on, Action } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export const COUNTER_FEATURE_KEY = 'counter';

export const initialState = 0;

const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function reducer(state: number, action: Action) {
  return counterReducer(state, action);
}
