import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/es/storage";
import { usersReducer } from "../components/user/store/userSlice";
import { compromisesRouter } from "../containers/CompromiseIdentity/store/compromiseSlice";
import { ipRouter } from "../containers/BlackListIp/store/ipSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { urlRouter } from "../containers/BlackListUrl/store/urlSlice";


const usersPersistConfig = {
  key: "store:users",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  users: persistReducer(usersPersistConfig, usersReducer),
  compromises: compromisesRouter,
  blackListIp: ipRouter,
  blackListUrl: urlRouter
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
