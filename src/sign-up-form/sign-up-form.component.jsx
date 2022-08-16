import { Fragment, useState } from "react";
import FormInput from "../Form-Component/form-input.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/Firebase/firebase.utils";
import "./sign-up-form.style.scss";
const getFormFieldValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFieldValues, setFormFieldValues] = useState(getFormFieldValues);
  const { displayName, email, password, confirmPassword } = formFieldValues;
  console.log("formfield", formFieldValues);

  const handleSubmit = async (e) => {
    // firebasedb.auth().createUserWithEmailAndPassword(email,password).catch((error) =>{
    const resetForm = () => {
      setFormFieldValues(getFormFieldValues);
    };
    e.preventDefault();
    if (getFormFieldValues === null) {
      alert("Do not create acoount when you input value");
      return;
    }

    if (password !== confirmPassword) {
      alert("Do not match password");
      return;
    }

    try {
      const { user } = createAuthUserWithEmailAndPassword(email, password);
      resetForm();
      await createUserDocumentFromAuth(user, { displayName });
      alert("Succes Create Account", user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log(" cannot create user, email already in use");
      } else {
        console.log(error);
      }
    }
    // })
  };

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormFieldValues({ ...formFieldValues, [name]: value });
  };
  return (
    <Fragment>
      <div className="form-container-sign-up">
        <span>
          <p>Sign up with your email and password </p>
        </span>
        <form id="submit-form-container" onSubmit={handleSubmit}>
          <div className="div-form-container">
            <FormInput
              label={"UserName"}
              type="text"
              onChange={handlerChange}
              name="displayName"
              value={displayName}
            />
          </div>
          <div className="div-form-container">
            <FormInput
              label={"Email"}
              type="email"
              onChange={handlerChange}
              name="email"
              value={email}
            />
          </div>
          <div className="div-form-container">
            <FormInput
              label={"Password"}
              type="password"
              onChange={handlerChange}
              name="password"
              value={password}
            />
          </div>
          <div className="div-form-container">
            <FormInput
              label={"Confirm Password"}
              type="password"
              onChange={handlerChange}
              name="confirmPassword"
              value={confirmPassword}
            />
            <div className="button-form-submit"></div>
            <button type="submit" className="btn-sign-up">
              <p>Sign Up</p>
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default SignUpForm;
