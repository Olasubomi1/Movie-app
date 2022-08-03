import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
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

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (error) {}
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="app">
            <ToastContainer />
            <NavBar user={this.state.user} />
            <main className="content">
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
            </main>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
