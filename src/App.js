import { Homepage } from './components/landing-page';
import {  Routes, Route , Link} from 'react-router-dom';
import {FormsAll} from './components/Product_ServicesForm';
import { Productlist } from './components/Productlist';
import { ProductState } from './store/ProductState';
import {ServiceState} from './store/ServiceState';
import {Servicelist} from './components/Servicelist';
function App() {
  return (
     <div>
      <ProductState>
        <ServiceState>
        <Routes>
        <Route path='/' element={ <Homepage/>}/>
        <Route path='/add' element={ <FormsAll/>}/>
        <Route path='/products' element={<Productlist />}/>
        <Route path='/services' element={ <Servicelist/>}/>
        </Routes>
        </ServiceState>
      </ProductState>
      </div>
  );
}

export default App;