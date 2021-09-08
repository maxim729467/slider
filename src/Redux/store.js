import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import packsReducer from "./slice";
import storage from "redux-persist/lib/storage";
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

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: "packages",
  storage,
  whitelist: ["packages"],
};

export const store = configureStore({
  reducer: {
    packs: persistReducer(authPersistConfig, packsReducer),
  },
  middleware,
  // devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
