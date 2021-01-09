import React from "react";
// Router
import { Route } from "react-router-dom";
// Pages
import Home from "./Pages/Home";
//Components
import Nav from "./Components/Nav";
// globalStyle
import GlobalStyle from "./Components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
