import { Homepage } from './components/landing-page';
import {  Routes, Route , Link} from 'react-router-dom';
import {FormsAll} from './components/Product_ServicesForm';
import { Productlist } from './components/Productlist';
function App() {
  return (
     <div>
      <Homepage/>
      <FormsAll/>
      {/* <Productlist/> */}
      </div>
  );
}

export default App;