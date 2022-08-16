import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../Form-Component/form-input.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../utils/Firebase/firebase.utils";
import "./sign-in-form.style.scss";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  // đăng nhập bằng google
  const signinWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Fragment>
      <div className="form-container-sign-up">
        <span>
          <h2>Already have an account</h2>
          <p>Sign up with your email and password </p>
        </span>
        <form form id="submit-form-container"></form>
        <div className="div-form-container">
          <FormInput
            label={"Email"}
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="div-form-container">
          <FormInput
            label={"Password"}
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div className="button-form-submit">
          <button type="submit" className="btn-sign-up" onClick={handleSubmit}>
            <p>Sign in</p>
          </button>
          <button onClick={signinWithGoogle}>
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
