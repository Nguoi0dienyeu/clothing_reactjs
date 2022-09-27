import { getAuth } from "@firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../../Context/user.context";
import "./sign-up-form.style.scss";
export default function SignUpForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signUp, currentUser } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Password do not match!");
    }
    try {
      setError("");
      setLoading(true);
      return await signUp(emailRef, passwordRef);
    } catch (error) {
      setError("Failer Created an account");
      console.log("run start", error);
    }
  }

  return (
    <Fragment>
      <Card>
        <Card.Body className="card-body-container">
          <h2>
            <p>Sign Up </p>
          </h2>
          {currentUser && currentUser.email}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required ref={passwordRef} />
            </Form.Group>
            <Form.Group id="confirmPassword">
              <Form.Label>ConfirmPassword</Form.Label>
              <Form.Control type="password" required ref={confirmPasswordRef} />
            </Form.Group>
            <div className="button-submit">
              <Button disabled={loading} type="submit">
                Sign up
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      {/* <div className="form-container-sign-up">
        <span>
          <p>Sign up with your email and password </p>
        </span>
        <form id="submit-form-container" onSubmit={handleSubmit}>
          <div className="div-form-container">
            <FormInput
              label={"UserName"}
              type="text"
              onChange={handlerChangeName}
              name="displayName"
              value={displayName}
            />
          </div>
          <div className="div-form-container">
            <FormInput
              label={"Email"}
              type="email"
              onChange={handlerChangeMail}
              name="email"
              value={email}
            />
          </div>
          <div className="div-form-container">
            <FormInput
              label={"Password"}
              type="password"
              onChange={handlerChangePassword}
              name="password"
              value={password}
            />
          </div>
          <div className="div-form-container">
            <FormInput
              label={"Confirm Password"}
              type="password"
              onChange={handlerChangeConfirmPassword}
              name="confirmPassword"
              value={confirmPassword}
            />
            <div className="button-form-submit"></div>
            <button type="submit" className="btn-sign-up">
              <p>Sign Up</p>
            </button>
          </div>
        </form>
      </div> */}
    </Fragment>
  );
}
