import { getRedirectResult } from "firebase/auth";
import React, { Fragment, useEffect } from "react";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/Firebase/firebase.utils";
import "./login.styles.scss";

const SignIn = () => {
  useEffect(() => {
    const asyncFn = async () => {
      const respone = await getRedirectResult(auth);
      if (respone) {
        const userDocRef = createUserDocumentFromAuth(respone.user);
      }
    };
    asyncFn();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
    console.log("userDocRef", userDocRef);
  };

  return (
    <Fragment>
      <div className="form-container">
        <div className="login-container">
          <button className="btn-sign-in-google" onClick={logGoogleUser}>
            <p>Sign in wit Google Popup</p>
          </button>
        </div>
        <SignUpForm />
      </div>
    </Fragment>
  );
};

export default SignIn;
