import "./App.css";
import Cart from "./Components/Cart/Cart";
import EditProduct from "./Components/Edit-Product-FInal/EditProduct";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import ProductList from "./Components/Product-List/ProductList";
import ProductPage from "./Components/Product-Page/ProductPage";
import Register from "./Components/Register/Register";
import Search from "./Components/Search/Search";

function App() {
  return (
    <>
      <Header />
      <Search />
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <ProductPage/> */}
      {/* <EditProduct/> */}
      {/* <ProductList /> */}
      <Cart/>
      <Footer />
    </>
  );
}

export default App;
