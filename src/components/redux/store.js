import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { commentsReducer } from "./commentsReducer";
import { todos } from "./todos";
const rootReducer = combineReducers({
  commentsReducer,
  todos,
});
const persistConfig = {
  key: "root",
  storage,
};

const persisteReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persisteReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
export default store;
