import { Link } from "react-router-dom";
import profile_pic from "../../assets/img/profile.jpeg";
import "../../css/style.css"
import patient from "../../data/patient.json"

export const MyProfile = () => {
  return (
      <div className="content">
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
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
                    {patient.email}
                  </li>
                  <li class="list-group-item"><label>Fullname:</label>
                    {patient.name}
                  </li>
                  <li class="list-group-item"><label>Age:</label>
                    {patient.age}
                  </li>
                  <li class="list-group-item"><label>Phone number:</label>
                    {patient.phone}
                  </li>
                  <li class="list-group-item"><label>Address:</label>
                    {patient.address}
                  </li>
                </ul>
              </div>
              <div class="col-md-5">
                <div class="py-2 d-flex justify-content-center">
                  <div class="profile-picture">
                    <img className="position-relative" src={profile_pic} alt="profile" />
                  </div>
                </div>
                <div class="py-2 w-100">
                  <div class="list-group">
                    <Link to="/profile" className="list-group-item list-group-item active">My Profile</Link>
                    <Link to="/" className="list-group-item list-group-item">Sign out</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}
