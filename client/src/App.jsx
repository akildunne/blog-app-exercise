import React from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import BlogDetail from "./screens/BlogDetail/BlogDetail";
import CreateBlog from "./screens/CreateBlog/CreateBlog";
import EditBlog from "./screens/EditBlog/EditBlog"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/api/blogs" component={Home} />
        <Route exact path="/api/blogs/create" component={CreateBlog} />
        <Route exact path="/api/blogs/:id" component={BlogDetail} />
        <Route exact path ="api/blogs/edit/:id" component={EditBlog} />
       
      </Switch>
    </div>
  );
}

export default App;
