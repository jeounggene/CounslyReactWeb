import React from "react";
import "./App.css";
import Home from "./components/pages/HomePage/Home";
import Services from "./components/pages/Services/Services";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Download from "./components/pages/Download/Download";
import SignUp from "./components/pages/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer.js/Footer";
import Terms from "./components/pages/PPnTOS/Terms";
import Policy from "./components/pages/PPnTOS/Policy";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={AboutUs} />
          <Route path="/sign-up" component={Download} />
          <Route path="/terms" component={Terms} />
          <Route path="/policy" component={Policy} />

          {/* <Route path='/download' component={Download} /> */}
        </Switch>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
