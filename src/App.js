import { Homepage } from './components/landing-page';
import {  Routes, Route , Link} from 'react-router-dom';
import {FormsAll} from './components/Product_ServicesForm';
import { Productlist } from './components/Productlist';
import ProductContext from './store/ProductContext';
import { ProductState } from './store/ProductState';
function App() {
  return (
     <div>
      <ProductState>
          <Homepage/>
          <FormsAll/>
          <Productlist/>
      </ProductState>
      </div>
  );
}

export default App;