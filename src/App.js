import logo from './logo.svg';
import './App.css';

import { Link, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Depertment from './pages/Departments';
import Departments from './pages/Departments';
import DepartmentProducts from './pages/DepartmentProducts';


function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/department">Departments</Link>
      <Link to="/listing/:id">Products</Link>
     <Routes>
     <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/department' element={<Depertment/>}>Departments</Route>
      <Route path='/details/:id' element={<ProductDetails/>}>Details</Route>
      <Route path='/listing/:department' element={<DepartmentProducts/>} />
     </Routes>
    </div>
  );
}

export default App;
