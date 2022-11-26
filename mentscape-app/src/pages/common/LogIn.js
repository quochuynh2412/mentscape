import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import banner from "../../assets/img/banner.jpeg"
import "../../css/style.css"

export const LogIn = () => {
  return (
    <>
      <Header />

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-7 col-lg-6">
                    <img src={banner} className="img-fluid" alt="Menscape Login"/>
                  </div>
                  <div className="col-md-12 col-lg-6 info-box">
                    <h4>Login Mentscape</h4>
                    <form action="https://dreamguys.co.in/demo/doccure/index.html">
                      <div className="form-floating mt-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="example@gmail.com"/>
                          <label for="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mt-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                          <label for="floatingPassword">Password</label>
                      </div>
                      <div className="text-end py-2">
                        <a className="forgot-link" href="forgot-password.html">Forgot Password?</a>
                      </div>
                      <button className="btn btn-lg btn-primary login-btn w-100" type="submit">Login</button>
                      <div className="text-center py-2 fw-bold">
                        <span>Don’t have an account? </span>
                        <Link to="/signup"> Register</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>		

      <Footer />
    </>
  )
}
