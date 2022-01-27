import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Scroll from "./components/scroll";
import About from "./pages/about";
import Best from "./pages/best";
import Home from "./pages/home";
import Popular from "./pages/popular";
import Recent from "./pages/recent";

function App() {
  return (
    <Router>
      <Scroll />
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/best_selling">
            <Best />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route  path="/most_popular">
            <Popular />
          </Route>
          <Route  path="/recent_arrival">
            <Recent />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
