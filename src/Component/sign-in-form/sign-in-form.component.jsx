import { Fragment, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../Form-Component/form-input.component";
// import {
//   createUserDocumentFromAuth,
//   signInAuthUserWithEmailAndPassword,
//   signInWithGooglePopup,
// } from "../../utils/Firebase/firebase.utils";
import "./sign-in-form.style.scss";
import { UserContext } from "../../Context/user.context";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const { setUserCurrent } = useContext(UserContext);

  // const handleSubmit = async (e) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // try {
  //   const { user } = await signInAuthUserWithEmailAndPassword(
  //     email,
  //     password
  //   );
  //   navigate("/home");
  //   setUserCurrent(" e.target.value();", e.target.value);
  //   console.log("user", user);
  // } catch (err) {
  //   setError(error.message);
  // }
  //   try {
  //     const { user } = await signInAuthUserWithEmailAndPassword(
  //       email,
  //       password
  //     );
  //     console.log("user", user);
  //   } catch (err) {
  //     setError();
  //     console.log("err", error);
  //   }
  // };

  // // đăng nhập bằng google
  // const signinWithGoogle = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   await createUserDocumentFromAuth(user);
  // };

  // const handleChangeEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleChangePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  return (
    <Fragment>
      <div className="form-container-sign-up">
        <span>
          <h2>Already have an account</h2>
          <p>Sign up with your email and password </p>
        </span>
        <form form id="submit-form-container"></form>
        <div className="div-form-container">
          <FormInput label={"Email"} type="email" name="email" value={email} />
        </div>
        <div className="div-form-container">
          <FormInput
            label={"Password"}
            type="password"
            name="password"
            value={password}
          />
        </div>
        <div className="button-form-submit">
          <button type="submit" className="btn-sign-up">
            <p>Sign in</p>
          </button>
          <button>
            <p>Google Sign In</p>
          </button>
        </div>
        <Link to="/reset" className="forgot password">
          Forgot password
        </Link>
      </div>
      <div className="form-container">
        <div className="flex-sign-in-text-center">
          <p>
            Don't have an account? <Link to="/sign-up">Sign up</Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default SignInForm;
