import logo from './logo.svg';
import './App.css';
import { useEffect } from "react"
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Products from './components/Products';
import Shop from './components/Shop';
import ShopContextProvider, { ShopContexts } from './ShopContext';


function App() {

  return (
    <div className="App">
      <ShopContextProvider>
        <Navbar />
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='shop' element={<Shop />} />
          </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
