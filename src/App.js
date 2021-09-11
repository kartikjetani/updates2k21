import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Explore from "./Explore";
import SignUp from "./Signup";
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/Valorant" component={Explore} />
        <Route exact path="/BidWiser" component={Explore} />
        <Route exact path="/BingeWatch" component={Explore} />
        <Route exact path="/ScvengerHunt" component={Explore} />
        <Route exact path="/Abhivyakti" component={Explore} />
        <Route exact path="/Avishkar" component={Explore} />
        <Route exact path="/Predictaholic" component={Explore} />
        <Route exact path="/Zodiac" component={Explore} />
        <Route exact path="/Niyukti" component={Explore} />
        <Route exact path="/Codechef" component={Explore} />
        <Route exact path="/CodeStorm" component={Explore} />
        <Route exact path="/BlindCode" component={Explore} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;

