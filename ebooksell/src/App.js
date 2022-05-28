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
import DisplayUser from "./Components/User/DisplayUser";
import EditUser from "./Components/User/EditUser";
import ProductList from "./Components/Book/Product-List/ProductList/ProductList";
import Protected from "./Protected";
import { RoutePaths } from "./RoutePaths";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={RoutePaths.Home} element={<Login />} />
        <Route exact path={RoutePaths.Register} element={<Register />} />
        <Route
          exact
          path={RoutePaths.AddCartProduct}
          element={<AddCartProduct />}
        />
        <Route
          exact
          path={RoutePaths.DisplayUser}
          element={<Protected Component={DisplayUser} />}
        />
        <Route
          exact
          path={RoutePaths.EditUser}
          element={<Protected Component={EditUser} />}
        />
        <Route
          exact
          path={RoutePaths.DisplayCategory}
          element={<Protected Component={DisplayCategory} />}
        />
        <Route
          exact
          path={RoutePaths.AddCategory}
          element={<Protected Component={AddCategory} />}
        />
        <Route
          exact
          path={RoutePaths.EditCategory}
          element={<Protected Component={EditCategory} />}
        />
        <Route
          exact
          path={RoutePaths.AddProduct}
          element={<Protected Component={AddProduct} />}
        />
        <Route
          exact
          path={RoutePaths.ProductList}
          element={<Protected Component={ProductList} />}
        />
        <Route
          exact
          path={RoutePaths.EditProduct}
          element={<Protected Component={EditProduct} />}
        />
        <Route
          exact
          path={RoutePaths.Cart}
          element={<Protected Component={Cart} />}
        />
        <Route path="*" element={<h1>Page not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
