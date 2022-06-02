import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CardIcon from "./pages/CardIcon";
import Home from "./components/Home";
import Products from "./components/Products";
import Cards from "./components/Cards";
import Product from "./components/Product";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
           <h4 >Shopping store</h4>
         <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Products">products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Cards">cards
                </Link>
              </li>
            </ul>
          </div>
          <CardIcon/>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/products" element={<Products />}exact />
        <Route path="/products/:id"  element={<Product />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
      
    </div>
  );
}
function AppwithStore(){
  return<Provider store={store}>
    <App/>
  </Provider>
}
export default AppwithStore;
