import { getRedirectResult } from "firebase/auth";
import React, { Fragment, useEffect } from "react";
import SignInForm from "../../sign-in-form/sign-in-form.component";
import {
  auth,
  createUserDocumentFromAuth,
} from "../../utils/Firebase/firebase.utils";
import "./login.styles.scss";

const Authentication = () => {
  useEffect(() => {
    const asyncFn = async () => {
      const respone = await getRedirectResult(auth);
      if (respone) {
        const userDocRef = createUserDocumentFromAuth(respone.user);
      }
    };
    asyncFn();
  }, []);

  return (
    <Fragment>
      <div className="form-container">
        <div className="login-container">
          <SignInForm />
        </div>
      </div>
    </Fragment>
  );
};

export default Authentication;
