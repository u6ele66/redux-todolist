import { todoReducer, TodosState } from './todoReducer';
import { createStore } from "redux";

  const saveState = (state: TodosState) => {
  try {
      const serialisedState = JSON.stringify(state);
      window.localStorage.setItem('app_state', serialisedState);
  } catch (err) {
      // Log errors here, or ignore
  }
};

const loadState = () => {
  try {
      const serialisedState = window.localStorage.getItem('app_state');

      if (!serialisedState) return undefined;
      return JSON.parse(serialisedState);
  } catch (err) {
      return undefined;
  }
};

const oldState = loadState();

export const store = createStore(todoReducer, oldState);

store.subscribe(() => {
  saveState(store.getState());
});