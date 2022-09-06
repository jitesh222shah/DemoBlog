import React, { useEffect, useState } from "react";
import "./App.css";
import Router from "./Router";

import { BrowserRouter } from "react-router-dom";
export const UserContext = React.createContext();
export const ChannelText = React.createContext();
function App() {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("state")));
  

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(count));
  }, [count]);

  return (
    <div className="appContainer">
      {/* <BrowserRouter>
      <UserContext.Provider value={"jackson"}>
        <ChannelText.Provider value={"iamchannel"}>
        <Router />
        </ChannelText.Provider>
     
      </UserContext.Provider>
        
      </BrowserRouter> */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
