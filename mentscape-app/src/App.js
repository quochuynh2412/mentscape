import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LogIn } from './pages/common/LogIn';
import { SignUp } from './pages/common/SignUp';
import { MyProfile } from './pages/common/MyProfile';
import { Homepage } from './pages/common/Homepage';
import { PickSignUp } from './pages/common/PickSignUp';
import Quizzes from "./pages/patients/Quizzes";
import BookingForm from './pages/patients/BookingForm';
import Appointments from './pages/patients/Appointments';
import BookingCalendar from './pages/patients/BookingCalendar';

import "./css/style.css"

function App() {
  return (
	  <BrowserRouter>
		<Header />

		<Routes>
			<Route path="/" element={<Homepage />}></Route>
			<Route path="/login" element={<LogIn />}></Route>
				<Route path="/signup" element={<PickSignUp />}></Route>
			<Route path="/signup/patient" element={<SignUp isDoctor={false} />}></Route>
			<Route path="/signup/therapist" element={<SignUp isDoctor={true} />}></Route>
			<Route path="/profile" element={<MyProfile />}></Route>
			<Route path="/quizzes" element={<Quizzes />}></Route>
			<Route path="/booking-calendar" element={<BookingCalendar />}></Route>
			<Route path="/booking-form" element={<BookingForm />}></Route>
			<Route path="/appointment" element={<Appointments />}></Route>
		</Routes>

		<Footer />
	  </BrowserRouter>
  )
}

export default App;
