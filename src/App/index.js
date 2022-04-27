import React from "react";
import { AppUI } from "./appUI";
import { TodoProvider } from "../TodoContext";



function App() {
  // const [patito, savePatito] = useLocalStorage('PATITO_V2', 'Mango')


  return (
    // <p>{patito}</p>,
    <TodoProvider>
          <AppUI/>
    </TodoProvider>

  );
}

export default App;
