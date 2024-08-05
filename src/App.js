import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected';
import ProductList from './ProductList';
import SearchProduct from './SearchProduct';
function App() {
  return (
   
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Protected  cmp={ProductList} />} />
          <Route path="/AddProduct" element={<Protected cmp={AddProduct} />} />
          <Route path="/UpdateProduct/:id" element={<Protected  cmp={UpdateProduct} />} />
          <Route path="/UpdateProduct" element={<Protected  cmp={UpdateProduct} />} />
          <Route path="/SearchProduct" element={<Protected  cmp={ SearchProduct} />} />
        </Routes>
      </div>
   
  );
}

export default App;