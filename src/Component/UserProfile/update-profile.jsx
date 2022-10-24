/* eslint-disable jsx-a11y/img-redundant-alt */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useRef, useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/user.context";
export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPassword = useRef();
  const { login } = useAuth();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function hadlerUpdate(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setSuccess("Login Success");
    } catch (error) {
      setError("Log in Failer");
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
                        Update Profile
                      </p>
                      {success && <Alert variant="success">{success}</Alert>}
                      {error && <Alert variant="danger">{error}</Alert>}
                      <Form class="mx-1 mx-md-4" onSubmit={hadlerUpdate}>
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
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              ref={confirmPassword}
                              placeholder=" Do have same the password"
                            />
                          </div>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            disabled={loading}
                            class="btn btn-primary btn-lg"
                          >
                            Update
                          </button>
                        </div>
                        <div className="footer">
                          <p className="footer-link-login">
                            Already have an account?
                            <span>
                              <Link to="/sign-up">Sign Up</Link>
                            </span>
                          </p>
                        </div>
                      </Form>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <Link to="/forgot">Forgot password</Link>
                      </div>
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
