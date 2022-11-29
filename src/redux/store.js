import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contactsSlice';



const persistConfig = {
  key: 'CONTACTS',
  storage,
  whitelist: ['contacts']
}


const persistedStore = persistReducer(persistConfig, contactsReducer);



export const store = configureStore({
  reducer: {
    contacts: persistedStore,
  },
});



export const persistor = persistStore(store)