import * as React from "react";
import "./styles.css";

interface Car {
  name: string;
  model: string;
  year: Date;
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
