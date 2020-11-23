import React from "react";
import Index from "./components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokeInfoPage from "./components/PokeInfo/PokeInfoPage";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <Index />
            <Footer />
          </Route>

          <Route path="/pokemon/:id" exact>
            <Navbar></Navbar>
            <PokeInfoPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
