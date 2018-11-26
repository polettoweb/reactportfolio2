import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./scss/App.scss";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Blog from "./components/Blog";
import Single from "./components/Single";
import Workshop from "./components/Workshop";


class App extends Component {
   render() {
      return (
         <div className="App">
            <Router>
               <React.Fragment>
                  <Header />
                  <Route exact path="/" component={Home} />
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/resume" component={Resume} />
                  <Route exact path="/Blog" component={Blog} />
                  <Route path="/Blog/:slug/:id" component={Single} />
                  <Route path="/workshop" component={Workshop} />
                  <Footer />
               </React.Fragment>
            </Router>
         </div>
      );
   }
}

export default App;
