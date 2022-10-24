import { Route, Routes } from "react-router-dom";
import SignInForm from "./Component/sign-in-form/sign-in-form.component";
import SignUpForm from "./Component/sign-up-form/sign-up-form.component";
import UserProfile from "./Component/UserProfile/profile";
import UpdateProfile from "./Component/UserProfile/update-profile";
import ResetFormEmailPassword from "./reset-email.component/Reset.component";
import Authentication from "./routes/authenticate/authenticate.component";
import CheckOut from "./routes/checkout/checkout";
import Home from "./routes/Home/home.component";
import Navigation from "./routes/Navigation/nav.component";
import ShopPage from "./routes/shop/shop.component";
const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Navigation />} component={Navigation}>
          <Route index element={<Home />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="sign-up" element={<SignUpForm />} />
          <Route path="sign-in" element={<SignInForm />} />
          <Route path="forgot" element={<ResetFormEmailPassword />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="update-profile" element={<UpdateProfile />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
