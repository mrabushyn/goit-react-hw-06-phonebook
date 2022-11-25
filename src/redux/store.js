import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';


const contactsReducer = createReducer([1,2,3], {

});
export const store = configureStore({
  reducer: {
    myValue: contactsReducer,
  },
});
