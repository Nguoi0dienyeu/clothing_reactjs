/* eslint-disable jsx-a11y/img-redundant-alt */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useRef, useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/user.context";
import "./sign-up-form.style.scss";
export default function SignUpForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [Success, setSuccess] = useState("");
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
      await signup(emailRef.current.value, passwordRef.current.value);
      setSuccess("Success created account");
    } catch (error) {
      setError("Failler created account");
    }
    setLoading(false);
  }

  return (
    <Fragment>
      <section class="vh-100">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      {Success && <Alert variant="success">{Success}</Alert>}
                      {error && <Alert variant="danger">{error}</Alert>}
                      <Form class="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              class="form-control"
                              ref={emailRef}
                              placeholder="Your Email"
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              ref={passwordRef}
                              placeholder=" Password"
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              class="form-control"
                              ref={confirmPasswordRef}
                              placeholder="Repeat your password"
                            />
                          </div>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            disabled={loading}
                            class="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                        <div className="footer">
                          <p className="footer-link-login">
                            Need to login?
                            <span>
                              <Link to="/sign-in">Log in</Link>
                            </span>
                          </p>
                        </div>
                      </Form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
