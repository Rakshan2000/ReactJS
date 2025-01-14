//Steps to create a context
//1. Create a context-> Index file
//2. Export a global context with createContext(initial Value)
//3. Create a globalState with a provider and pass a children & value
//4. Wrap this root component (main.js)


import { createContext, useState } from "react";

//create the context
export const GlobalContext = createContext(null);

//create the global state that receive component as a children

function GlobalState({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
