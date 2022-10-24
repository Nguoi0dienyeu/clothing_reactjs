import { Fragment, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/user.context";
import "./profile.styles.scss";

export default function UserProfile() {
  const [error, setError] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate_update = useNavigate();
  async function handleLogout() {
    setError("");
    try {
      await logout();
      if (currentUser) return navigate_update("/sign-in");
    } catch (error) {
      setError("Do not to Updating.......");
    }
  }
  return (
    <Fragment>
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-md-9 col-lg-7 col-xl-5">
              <div class="card">
                <div class="card-body p-4">
                  <div class="d-flex text-black">
                    <div class="flex-shrink-0"></div>
                    <div class="flex-grow-1 ms-3">
                      <h5 class="mb-1">{currentUser && currentUser.email}</h5>
                      <p class="mb-2 pb-1">Senior Journalist</p>
                      <div class="d-flex justify-content-start rounded-3 p-2 mb-2">
                        {error && <Alert variant="danger">{error}</Alert>}
                      </div>
                      <div class="d-flex pt-1">
                        <Link
                          to="/update-profile"
                          type="button"
                          class="btn btn-outline-primary me-1 flex-grow-1"
                        >
                          Update Profile
                        </Link>
                      </div>
                      <div className="logut">
                        <button
                          type="button"
                          class="btn btn-link"
                          data-mdb-ripple-color="dark"
                          onClick={handleLogout}
                        >
                          <Link to="/" className="text-link">
                            Log Out
                          </Link>
                        </button>
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
