import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./components/layout";
import Productdetails from "./components/productdetails";
import Scroll from "./components/scroll";
import Checkout from "./pages/checkout";
import Featured from "./pages/featured";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Auth from "./pages/signin";
import Signup from "./pages/signup";
import { getCategories } from "./services/categoryService";

function App() {
  const [categories, setCategories] =  useState([]);

  async function getSavedCategories() {
    const { data: savedCategories } = await getCategories();
   
    setCategories(savedCategories);
  }

  useEffect(() => {

    getSavedCategories();
  }, [])


  return (
    <Router>
        <ToastContainer />
      <Scroll />
      <Layout categories={categories}>
        <Switch>
          <Route exact path="/">
            <Home categories={categories} />
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
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/productpage">
            <Productdetails />
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
