import { NavBar } from './Components/NavBar/NavBar.js';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from './context/CartContext.js';
import { CartScreen } from './Components/CartScreen/CartScreen.js';


function App() {
  return (<>
    
    <CartProvider>
      <BrowserRouter>
        < NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/category/:catId">
            <ItemListContainer/>
          </Route>
          <Route exact path="/detail/:itemId">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/cart">
            <CartScreen/>
          </Route>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  </>);
}

export default App;
