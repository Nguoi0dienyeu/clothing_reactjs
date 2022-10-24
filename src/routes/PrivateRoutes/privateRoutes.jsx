import { redirect, Route } from "react-router-dom";
import { useAuth } from "../../Context/user.context";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth;
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Component {...props} /> : redirect("/login");
      }}
    ></Route>
  );
}
