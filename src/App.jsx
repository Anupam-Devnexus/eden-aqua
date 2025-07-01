import './App.css';
import NavigationAll from './Components/Navigation/NavigationAll';
import Footer from './Components/SingleComponents/Footer';
import Home from './Pages/Home/Home';
import Sustainibility from "./Pages/Sustainibility/Sustainibility"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './Pages/About/About';
import Wheretobuy from "./Pages/WhereToBuy/Wtb";
import Shop from "./Pages/Shop/Shop";
import Subscribe from "./Pages/SubscribeAndSave/Sas";
import Cart from "./Pages/Cart/Cart";
import Signup from './Pages/Signup/Signup';
import Login from './Pages/LogIn/Login';
function App() {
  return (
    <Router>
      {/* Navigation */}
      <NavigationAll />

      {/* Main content wrapper */}
      <main className="min-h-screen pt-[6rem] ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sustainability" element={<Sustainibility />} />
          <Route path="/about" element={<About />} />
          <Route path="/wheretobuy" element={<Wheretobuy />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path ="/cart" element ={<Cart/>}/>
          <Route path ="/signup" element ={<Signup/>}/>
          <Route path ="/login" element ={<Login/>}/>








          {/* Add more routes here as needed */}

          {/* Redirect all unknown routes to /shop */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
