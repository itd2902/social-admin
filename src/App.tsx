import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { AccountRoute, PrivateRoute } from './components';
import { Login } from './pages/Account';
import { Admin } from './pages/Admin/Admin';
import './styles/sb-admin-2.min.css';
function App() {
   return (
      <div className="App" id="wrapper">
         <Router>
            <Switch>
               <AccountRoute>
                  <Login></Login>
               </AccountRoute>
               <PrivateRoute>
                  <Admin />
               </PrivateRoute>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
