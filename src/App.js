import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Scroll from "./components/scroll";
import Featured from "./pages/featured";
import Home from "./pages/home";
import Shop from "./pages/shop";
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
          <Route path="/featured">
            <Featured />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/signin">
            <Auth />
          </Route>
          
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
