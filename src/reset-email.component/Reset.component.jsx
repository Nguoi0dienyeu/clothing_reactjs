import { Fragment, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase/firebase.utils";
import "./reset.component.styles.scss";

import { useRef } from "react";
import { Alert, Form } from "react-bootstrap";
import { useAuth } from "../Context/user.context";
export default function ResetFormEmailPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const [error, setError] = useState(false);
  async function handlerSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setLoading(true);
      setError("");
      await resetPassword(emailRef.current.value);
      setMessage("Check your email link to reset password");
    } catch (error) {
      setError("Reset Password failed");
    }
    setLoading(false);
  }

  // useEffect(() => {
  //   if (loading) return;
  //   if (user) navigate("/forgot");
  // }, [loading, navigate, user]);
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
                        Reset Password
                      </p>
                      {message && <Alert variant="success">{message}</Alert>}
                      {error && <Alert variant="danger">{error}</Alert>}
                      <Form class="mx-1 mx-md-4" onSubmit={handlerSubmit}>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              ref={emailRef}
                              id="form3Example3c"
                              class="form-control"
                              placeholder="Your Email"
                            />
                          </div>
                        </div>
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            disabled={loading}
                            class="btn btn-primary btn-lg"
                          >
                            Forgot Password
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
