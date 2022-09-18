import { getRedirectResult } from "firebase/auth";
import React, { Fragment, useEffect } from "react";
import SignUpForm from "../../Component/sign-up-form/sign-up-form.component";
import { auth } from "../../utils/Firebase/firebase.utils";
import "./login.styles.scss";

const Authentication = () => {
  useEffect(() => {
    const asyncFn = async () => {
      const respone = await getRedirectResult(auth);
      // if (respone) {
      //   const userDocRef = createUserDocumentFromAuth(respone.user);
      // }
    };
    asyncFn();
  }, []);

  return (
    <Fragment>
      <div className="form-container">
        <div className="login-container">
          <SignUpForm />
        </div>
      </div>
    </Fragment>
  );
};

export default Authentication;
