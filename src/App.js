import React from "react";
import Landing from "./components/pages/Landing";
import Cart from "./components/pages/Cart";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "./scss/Style.scss";
import { useSelector } from "react-redux";

const App = () => {
  const isCartPage = useSelector((state) => state.isCartPage);
  return (
    <div className='wrapper'>
      <Header />
      {!isCartPage ? 
        <Landing />
      :
        <Cart />
      }
      <Footer />
    </div>
  );
}

export default App;
