import React from "react";
import { PropsContext } from "./src/Context";
import App from "./src/App";

export default function index(props) {
  return (
    <PropsContext.Provider value={props}>
      <App />
    </PropsContext.Provider>
  );
}
