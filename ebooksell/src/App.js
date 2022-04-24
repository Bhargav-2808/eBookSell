import { Route, Routes } from "react-router-dom";
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
import DisplayUser from "./Components/User/DisplayUser";
import EditUser from "./Components/User/EditUser";

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
      {/* <Cart/> */}
      <Routes>
          <Route exact path='/' element={<ProductPage/>}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/register" element={<Register />}/>
          <Route exact path="/editproduct" element={<EditProduct />}/>
          <Route exact path="/productlist" element={<ProductList />}/>
          <Route exact path="/displayuser" element={<DisplayUser />}/>
          <Route exact path="/edituser/:id" element={<EditUser />}/>


        </Routes> 
      <Footer />
    </>
  );
}

export default App;
