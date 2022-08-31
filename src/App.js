import './App.css';
import {
  Route,
  Switch,
} from "react-router-dom";
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Category from './pages/Category';
import { ProductProvider } from './context/products.context';
import Navbar from './components/Navbar';
import { CartProvider } from './context/cart.context';

const routes = [
  { path: "/", component: <Home /> },
  { path: "/checkout", component: <Checkout /> },
  { path: "/category", component: <Category /> },
  { path: "/category/:id", component: <Category /> },

]

function App() {
  return (

    <ProductProvider>
      <CartProvider>
        <Navbar />
        {/* <div className='px-20 border'> */}

        <Switch>
          {routes.map(e => <Route key={e.path} exact path={e.path}>{e.component}</Route>)}

        </Switch>
        {/* </div> */}
      </CartProvider>
    </ProductProvider>

  );
}

export default App;
