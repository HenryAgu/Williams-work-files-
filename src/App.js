import "./bulma.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Body from "./components/Body";
import Pricing from "./components/Pricing";
import Signup from "./components/Signup";
import Contact from "./components/Contact";

// Import react DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Footer />
        </Switch>
      </>
    </Router>
  );
}

export default App;
