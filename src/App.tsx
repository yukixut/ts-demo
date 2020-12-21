import "@/App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RenderSubRouter } from "./router/renderSubRouter";
import { main } from "./router/routers";

export const AppContext = React.createContext({ username: "superawesome" });

function App() {
  return (
    // useContext  实现自组建之间共享状态
    <AppContext.Provider
      value={{
        username: "superawesome",
      }}
    >
      <div className="App">
        {/* <h1 className={"title"}>222</h1> */}
        <Router>
          {main.map((route) => {
            return (
              <RenderSubRouter route={route} key={route.path}></RenderSubRouter>
            );
          })}
          {/* <Route path={"/test"} component={Test3}></Route>
          <Route path={"/test2"} component={Test2}></Route> */}
        </Router>

        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </AppContext.Provider>
  );
}

export default App;
