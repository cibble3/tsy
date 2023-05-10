import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer/counterReducer';
import darklightReducer from './reducer/darklightReducer';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    darklight: darklightReducer,

  },
});

export default store;