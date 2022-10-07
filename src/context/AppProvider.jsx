import { useState } from "react";

import AppContext from "./AppContext";

const AppContextProvider = ({ children }) => {
  const [test, setTest] = useState("Test Context");

  return (
    <AppContext.Provider value={{ test, setTest }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
