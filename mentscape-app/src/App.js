import './App.css';
// // import "./style.css";
import Quizzes from "./pages/patients/Quizzes";
import BookingForm from './pages/patients/BookingForm';
import Appointments from './pages/patients/Appointments';
import BookingCalendar from './pages/patients/BookingCalendar';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Quizzes /> */}
      {/* <Appointments /> */}
      {/* <Booking /> */}
      {/* <BookingForm /> */}
      {/* <BookingCalendar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/quizzes" element={<Quizzes />}></Route>
          <Route path="/booking-calendar" element={<BookingCalendar />}></Route>
          <Route path="/booking-form" element={<BookingForm />}></Route>
          <Route path="/appointment" element={<Appointments />}></Route>
        </Routes>

      </BrowserRouter>




    </div>
  );
}

export default App;
