import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Scroll from "./components/scroll";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Scroll />
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
