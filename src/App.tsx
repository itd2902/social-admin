import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./components";
import { Login } from "./pages/Account";
import { Admin } from "./pages/Admin/Admin";
import "./styles/sb-admin-2.min.css";
function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
        <Switch>
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
          {/* <Admin></Admin> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
