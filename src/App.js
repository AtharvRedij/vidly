import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import NavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/registrationForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegistrationForm} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
