import React, { Component } from "react";
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
import Logout from "./Components/logout";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
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
                <Route path="/Logout" component={Logout} />
                <Route path="/Register" component={registerForm} />
                <Route
                  path="/Movies"
                  render={(props) => (
                    <Movies {...props} user={this.state.user} />
                  )}
                />
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
