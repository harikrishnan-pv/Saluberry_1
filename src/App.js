import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Scroll from "./components/scroll";
import About from "./pages/about";
import Shop from "./pages/shop";
import Home from "./pages/home";
import Featured from "./pages/featured";
import Auth from "./pages/signin";

function App() {
  return (
    <Router>
      <Scroll />
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route  path="/signin">
            <Auth />
          </Route>
          <Route  path="/featured">
            <Featured />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
