import { NavBar } from './Components/NavBar/NavBar.js';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

function App() {
  return (<>
    
    < NavBar />
    < ItemListContainer greeting="Aca te va una prop"/>

  </>);
}

export default App;
