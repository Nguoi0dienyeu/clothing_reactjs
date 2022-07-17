import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home.component";
import SignIn from "./routes/Sign-In/login.component";
import Navigation from "./routes/Navigation/nav.component";
const App = () => {
  const Shop = () => {
    return <h2>I am the shop page</h2>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;
