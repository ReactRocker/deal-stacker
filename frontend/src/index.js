import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ThemeConfig } from "./theme";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ThemeConfig>
      <SnackbarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeConfig>
  </Provider>
);
