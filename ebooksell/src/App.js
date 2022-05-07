import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./Components/Add-Product/AddProduct";
import AddCategory from "./Components/BookCategory/AddCategory";
import DisplayCategory from "./Components/BookCategory/DisplayCategory/DisplayCategory";
import EditCategory from "./Components/BookCategory/Edit-Category/EditCategory";
import Cart from "./Components/Cart/Cart";
import EditProduct from "./Components/Edit-Product-FInal/EditProduct";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import DisplayProduct from './Components/Add-Product/DisplayProduct/DisplayProduct'
import ProductPage from "./Components/Add-Product/Product-Page/ProductPage";
import Register from "./Components/Register/Register";
import Search from "./Components/Search/Search";
import DisplayUser from "./Components/User/DisplayUser";
import EditUser from "./Components/User/EditUser";

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
        <Route exact path="/" element={<ProductPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/editproduct/:id" element={<EditProduct />} />
        <Route exact path="/displayproduct" element={<DisplayProduct />} />
        <Route exact path="/displayuser" element={<DisplayUser />} />
        <Route exact path="/displaycategory" element={<DisplayCategory />} />
        <Route exact path="/edituser/:id" element={<EditUser />} />
        <Route exact path="/addproduct" element={<AddProduct />} />

        <Route exact path="/addcategory" element={<AddCategory />} />
        <Route exact path="/editcategory/:id" element={<EditCategory />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
