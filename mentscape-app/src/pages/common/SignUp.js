import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import profile_pic from "../../assets/img/profile.jpeg";
import "../../css/style.css"

export const SignUp = () => {
  return (
    <>
      <Header />

      <div className="content">
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="../Homepage/homepage.php">Home</a></li>
            <li class="breadcrumb-item"><a href="pickRegister.php">Register</a></li>
            <li class="breadcrumb-item active" aria-current="page">User Register</li>
          </ol>
          <div class="p-5 info-box">
            <form class="row g-3 needs-validation" enctype="multipart/form-data" method="post" action="customerRegister.php" novalidate>
              <h2 class="text-center">Register as user</h2>
              <div class="col-12 d-flex justify-content-center">
                <div class="my-4 profile-picture">
                  <label for="img-file">
                    <span>Change Image</span>
                  </label>
                  <input type="file" id="img-file" name="profile-img" onchange="loadFile(event)" required />
                  <img id="img-output" src={profile_pic} alt="profile avatar" />
                  <div class="invalid-feedback">
                    Please choose the profile image
                  </div>
                </div>
              </div>
              <div class="col-12">
                <label for="email" class="form-label required">Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Email address" required/>
              </div>
              <div class="col-12">
                <label for="password" class="form-label required">Password</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="Password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]){8,20}$" required/>
                  <div class="invalid-feedback" id="password-feedback">
                    Password must be from 8 to 20 characters with appropriate characters, contain at least 1 lowercase character, 1 uppercase letter, 1 digit
                  </div>
              </div>
              <div class="col-12">
                <label for="name" class="form-label required">Full Name</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Customer name" required/>
              </div>
              <div class="col-md-6">
                <label for="age" class="form-label required">Age</label>
                <input type="number" class="form-control" id="age" name="age" placeholder="Age" min="1" required/>
              </div>
              <div class="col-md-6">
                <label for="phone" class="form-label required">Phone Number</label>
                <input type="tel" class="form-control" id="phone" name="phone" placeholder="Phone number" required/>
              </div>
              <div class="col-12">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" name="address" placeholder="Address"/>
              </div>
              <div class="col-12">
                <button class="mt-2 w-100 btn btn-primary" type="submit" name="act">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
