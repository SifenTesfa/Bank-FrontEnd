import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected';
import ProductList from './ProductList';
import SearchProduct from './SearchProduct';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Home from './Home';
import ReviewPage from './ReviewPage';

// Main Layout Component
function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col"> {/* Ensure margin-left is equal to the width of the Sidebar */}
        <Topbar />
        <div className="flex-1 mt-16 p-4"> {/* Adjust margin-top to fit Topbar height */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AddProduct" element={<Protected cmp={AddProduct} />} />
            <Route path="/UpdateProduct/:id" element={<Protected cmp={UpdateProduct} />} />
            <Route path="/SearchProduct" element={<Protected cmp={SearchProduct} />} />
            <Route path="/review" element={<Protected cmp={ReviewPage} />} />
            <Route path="/ProductList" element={<Protected cmp={ProductList} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

// App Component
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<MainLayout />} /> {/* MainLayout for all other routes */}
    </Routes>
  );
}

export default App;
