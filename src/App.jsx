import React, { useContext } from "react";
import PageLayout from "./layout/PageLayout";
import AppContext from "./context/AppContext";

function App() {
  const { test } = useContext(AppContext);

  return (
    <div className="App">
      <h1>{test}</h1>
      <PageLayout />
    </div>
  );
}

export default App;
