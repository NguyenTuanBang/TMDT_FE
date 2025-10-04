import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Authen from "./pages/Authen";
import Test from "./pages/Test";
import ForgotPassword from "./pages/ForgotPassword";
import MyAccount from "./pages/MyAccount";
import Profile from "./pages/Profile";
import Address from "./pages/Address";
import ChangePassword from "./pages/ChangePassword";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Routes>
      {/* <Route path="/myaccount" element={<MyAccount />}>
        <Route index element={<Profile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="address" element={<Address />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>

      <Route path="/authen" element={<Authen />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route path="/test" element={<Test />} />
      <Route path="/products" element={<Products />} />
      
      <Route path="/products/detail" element={<ProductDetail />} /> */}
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        {/* <Route path="/listProduct" element={<ListProduct />} /> */}


        <Route path="/myaccount" element={<MyAccount />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="address" element={<Address />} />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>

        <Route path="/authen" element={<Authen />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </Routes>

  );
}

export default App;
