import React from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6 ">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="img-fluid"
                  alt="Phone"
                />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form method="POST">
                  <div className="form-outline mb-2">
                    <input
                      type="email"
                      id="form1Example13"
                      className="form-control form-control-lg"
                      placeholder="Email Address"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label
                      className="form-label"
                      htmlFor="form1Example13"
                    ></label>
                  </div>

                  <div className="form-outline mb-2">
                    <input
                      type="password"
                      id="form1Example23"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label
                      className="form-label"
                      htmlFor="form1Example23"
                    ></label>
                  </div>

                  <div className="d-flex flex-column gap-3">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block "
                      style={{ backgroundColor: "#5474FC" }}
                      onClick={loginUser}
                    >
                      Sign in
                    </button>

                    <div className="divider d-flex align-items-center my-2">
                      <p className="text-center fw-bold mx-3 mb-0 text-muted">
                        OR
                      </p>
                    </div>
                    <a
                      className="btn btn-primary btn-lg btn-block"
                      style={{ backgroundColor: " #3b5998" }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-facebook-f me-2"></i>Continue with
                      Facebook
                    </a>
                    <a
                      className="btn btn-primary btn-lg btn-block"
                      style={{ backgroundColor: "#55acee" }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-twitter me-2"></i>Continue with
                      Twitter
                    </a>
                    <div>
                      Don't have an account?{" "}
                      <Link to="/signup">Create an account</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signin;
