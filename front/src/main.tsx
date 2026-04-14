import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";
import { store, persistor } from "./app/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";


createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <CssBaseline />
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </BrowserRouter>,
);
