import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import profile_pic from "../../assets/img/profile.jpeg";
import "../../css/style.css"

export const MyProfile = () => {
  return (
    <>
      <Header />

      <div className="content">
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="../Homepage/homepage.php">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">My profile</li>
          </ol>
        </div>
        <div class="container">
          <h1 class="text-center"> My account</h1>
        </div>
        <div class="container">
          <div class="mt-3 info-box">
            <div class="row py-4">
              <div class="col-md-7">
                <ul class="list-group list-group-flush info-list">
                  <li class="list-group-item"><label>Email address:</label>
                      dauminh25@gmail.com
                  </li>
                  <li class="list-group-item"><label>Fullname:</label>
                    Dau Hoang Minh
                  </li>
                  <li class="list-group-item"><label>Age:</label>
                    19
                  </li>
                  <li class="list-group-item"><label>Phone number:</label>
                    0997542345
                  </li>
                  <li class="list-group-item"><label>Address:</label>
                    Nam Tu Liem, Hanoi
                  </li>

                </ul>
              </div>
              <div class="col-md-5">
                <div class="py-2 d-flex justify-content-center">
                  <form enctype="multipart/form-data" method="post" action="myAccount.php">
                    <div class="profile-picture">
                      <label for="img-file">
                        <span>Change Image</span>
                      </label>
                      <input id="img-file" name="profile-img" type="file" onchange="loadFile(event)" />
                      <img id="img-output" src={profile_pic} alt="profile picture" />
                    </div>
                    <div class="mt-3 text-center">
                      <button type="submit" name="saveImg" class="btn btn-secondary">Save image</button>
                    </div>

                  </form>
                </div>

                <div class="py-2 w-100">
                  <div class="list-group">
                    <a class="list-group-item list-group-item active" href="">My profile</a>
                    <a class="list-group-item list-group-item-action" href="../Login/logout.php" onclick="clearCart()">Sign Out</a>
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
