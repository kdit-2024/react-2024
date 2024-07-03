## react redux store 사용시 라이브러리 변경

```bash
npm install @reduxjs/toolkit react-redux
```

```js
import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reducer from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: reducer,
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```
