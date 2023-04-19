import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import todoReducer from "./features/todo";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
