import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (
    <section className="section section-specialities">
      <Navbar>
        1234
      </Navbar>
				<div className="container-fluid">
					<div className="section-header text-center">
						<h2>Clinic and Specialities</h2>
						<p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div className="row justify-content-center">
						<div className="col-md-9">
							<div className="specialities-slider slider">
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src="assets/img/specialities/specialities-01.png" className="img-fluid" alt="Speciality"/>
										<span><i className="fa fa-circle" aria-hidden="true"></i></span>
									</div>
									<p>Urology</p>
								</div>	
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src="assets/img/specialities/specialities-02.png" className="img-fluid" alt="Speciality"/>
										<span><i className="fa fa-circle" aria-hidden="true"></i></span>
									</div>
									<p>Neurology</p>	
								</div>							
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src="assets/img/specialities/specialities-03.png" className="img-fluid" alt="Speciality"/>
										<span><i className="fa fa-circle" aria-hidden="true"></i></span>
									</div>	
									<p>Orthopedic</p>	
								</div>							
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src="assets/img/specialities/specialities-04.png" className="img-fluid" alt="Speciality"/>
										<span><i className="fa fa-circle" aria-hidden="true"></i></span>
									</div>	
									<p>Cardiologist</p>	
								</div>							
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src="assets/img/specialities/specialities-05.png" className="img-fluid" alt="Speciality"/>
										<span><i className="fa fa-circle" aria-hidden="true"></i></span>
									</div>	
									<p>Dentist</p>
								</div>							
								
							</div>
							
						</div>
					</div>
				</div>   
			</section>
  )
}

export default App;
