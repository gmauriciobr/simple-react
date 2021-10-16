import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import Cart from "./page/Cart";
import Home from "./page/Home";
import ProductDetails from "./page/ProductDetails";

const Routes = () => {
  const title = "My Store";

  return (
    <BrowserRouter>
      <TopBar title={title} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:id">
          <ProductDetails />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
