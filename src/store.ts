import { todoReducer} from './todoReducer';
import { createStore } from "redux";


export const store = createStore(todoReducer);