import React from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import BlogDetail from "./screens/BlogDetail/BlogDetail"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/api/blogs" component={Home} />
        <Route exact path="/api/blogs/:id" component={BlogDetail} />
      </Switch>
    </div>
  );
}

export default App;
