import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home.component";
import Authentication from "./routes/authenticate/authenticate.component";
import Navigation from "./routes/Navigation/nav.component";
import ResetFormEmailPassword from "./reset-email.component/Reset.component";
import SignUpForm from "./Component/sign-up-form/sign-up-form.component";
import ShopPage from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="sign-up" element={<SignUpForm />} />
        <Route path="reset" element={<ResetFormEmailPassword />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};
export default App;
