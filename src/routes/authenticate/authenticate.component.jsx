import React, { Fragment } from "react";
import SignUpForm from "../../Component/sign-up-form/sign-up-form.component";
import "./login.styles.scss";
import { UserProvier } from "../../Context/user.context";

const Authentication = () => {
  return (
    <Fragment>
      <UserProvier>
        <div className="form-container">
          <div className="login-container">
            <SignUpForm />
          </div>
        </div>
      </UserProvier>
    </Fragment>
  );
};

export default Authentication;
