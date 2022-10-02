import { Route, Routes } from "react-router-dom";
import SignInForm from "./Component/sign-in-form/sign-in-form.component";
import SignUpForm from "./Component/sign-up-form/sign-up-form.component";
import { UserProvier } from "./Context/user.context";
import ResetFormEmailPassword from "./reset-email.component/Reset.component";
import Authentication from "./routes/authenticate/authenticate.component";
import CheckOut from "./routes/checkout/checkout";
import Home from "./routes/Home/home.component";
import Navigation from "./routes/Navigation/nav.component";
import ShopPage from "./routes/shop/shop.component";
const App = () => {
  return (
    <UserProvier>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="sign-up" element={<SignUpForm />} />
            <Route path="sign-in" element={<SignInForm />} />
            <Route path="reset" element={<ResetFormEmailPassword />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<CheckOut />} />
          </Route>
        </Routes>
      </div>
    </UserProvier>
  );
};
export default App;
