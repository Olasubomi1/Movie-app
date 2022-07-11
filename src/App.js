import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./Components/navBar";
import Movies from "./Components/movies";
import Customers from "./Components/navBar/Customers";
import Rentals from "./Components/navBar/Rentals";
import notFound from "./Components/notFound.jsx";
import MovieForm from "./Components/movieForm";
import loginForm from "./Components/loginForm";
import registerForm from "./Components/registerForm";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <div className="app">
          <ToastContainer />
          <NavBar />
          <div className="content">
            <Switch>
              <Route path="/Movies/:id" component={MovieForm} />
              <Route path="/Login" component={loginForm} />
              <Route path="/Register" component={registerForm} />
              <Route path="/Movies" component={Movies} />
              <Route path="/Customers" component={Customers} />
              <Route path="/Rentals" component={Rentals} />
              <Route path="/notFound" component={notFound} />
              <Route path="/" exact component={Movies} />
              <Redirect to="/notFound" />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
