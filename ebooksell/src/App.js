import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./Components/Book/Product-List/AddProduct/AddProduct";
import AddCategory from "./Components/BookCategory/AddCategory";
import DisplayCategory from "./Components/BookCategory/DisplayCategory/DisplayCategory";
import EditCategory from "./Components/BookCategory/Edit-Category/EditCategory";
import Cart from "./Components/Cart/Cart";
import EditProduct from "./Components/Book/Product-List/Edit-Product-FInal/EditProduct";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import AddCartProduct from "./Components/Book/Book/AddCartProduct";
import Register from "./Components/Register/Register";
import Search from "./Components/Search/Search";
import DisplayUser from "./Components/User/DisplayUser";
import EditUser from "./Components/User/EditUser";
import ProductList from "./Components/Book/Product-List/ProductList/ProductList";
import { BookState } from "./Context/BookState";

function App() {
  return (
    <>
    
        <Header />

        {/* <Login/> */}
        {/* <Register/> */}
        {/* <ProductPage/> */}
        {/* <EditProduct/> */}
        {/* <ProductList /> */}
        {/* <Cart/> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/editbook/:id" element={<EditProduct />} />
          <Route exact path="/addcartproduct" element={<AddCartProduct />} />
          <Route exact path="/displayuser" element={<DisplayUser />} />
          <Route exact path="/displaycategory" element={<DisplayCategory />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/productlist" element={<ProductList />} />
          <Route exact path="/addproduct" element={<AddProduct />} />
          <Route exact path="/addcategory" element={<AddCategory />} />
          <Route exact path="/editcategory/:id" element={<EditCategory />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
     
    </>
  );
}

export default App;
