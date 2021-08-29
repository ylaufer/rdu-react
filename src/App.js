import { NavBar } from './Components/NavBar/NavBar.js';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (<>
    

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
               <h1>Carrito</h1>
            </Route>
            <Route path="*">
                <Redirect to="/"/>
            </Route>
          </Switch>
      </BrowserRouter>
  </>);
}

export default App;
