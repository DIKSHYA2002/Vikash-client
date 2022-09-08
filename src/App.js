import { Homepage } from "./components/landing-page";
import { Routes, Route, Link } from "react-router-dom";
import { FormsAll } from "./components/Product_ServicesForm";
import { ProductState } from "./store/ProductState";
import { ServiceState } from "./store/ServiceState";
import { Services } from "./components/Services";
import { Products } from "./components/Products";
import { BlogPage } from "./components/BlogPage";
import { BlogList } from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import "./components/BlogPage.css";
function App() {
  return (
    <div>
      <ProductState>
        <ServiceState>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/add" element={<FormsAll />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/addblog" element={<BlogForm />} />
            <Route path="/blog/:id" element={<BlogPage />} />
          </Routes>
        </ServiceState>
      </ProductState>
    </div>
  );
}

export default App;
