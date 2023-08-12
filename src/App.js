import logo from './logo.svg';
import './App.css';

import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path='/details/:id' element={<ProductDetails/>}>Details</Route>
     </Routes>
    </div>
  );
}

export default App;
