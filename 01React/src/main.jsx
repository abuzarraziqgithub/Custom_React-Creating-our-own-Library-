import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return <h1>This is MyAPP!</h1>;
}

// const reactElement = {
//   type: "a",

//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Visit google?
  </a>
);

const reactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "This is Google link child"
);

createRoot(document.getElementById("root")).render(<App />);
