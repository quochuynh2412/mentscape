import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';
import { LogIn } from './pages/common/LogIn';
import { SignUp } from './pages/common/SignUp';
import { MyProfile } from './pages/common/MyProfile';
import { PickSignUp } from './pages/common/PickSignUp';
import Quizzes from "./pages/patients/Quizzes";
import BookingForm from './pages/patients/BookingForm';
import Appointments from './pages/patients/Appointments';
import BookingCalendar from './pages/patients/BookingCalendar';
import Detail from './pages/therapist/Detail';
import Search from './pages/patients/Search';
import News from './pages/common/News';
import Home from './pages/common/Home';
import Approve_page from './pages/admin/Approve-page';
import { Dashboard } from './pages/therapist/Dashboard';
import { NotFound } from './pages/common/NotFound';
import PatientNote from './pages/therapist/PatientNote';
import { useAuth } from './firebase/authFunc';
import "./css/style.css"
import MyPatients from './pages/therapist/MyPatients';
import { ReadStory } from './pages/patients/ReadStory';
import Commentlist from './pages/patients/Commentlist';
import { Comment } from './pages/patients/Comment';
import { AdviceList } from './pages/patients/AdviceList';
import Advice from './pages/patients/Advice';



function App() {
	const { isLoading, user } = useAuth();
	return (
		<BrowserRouter>
			{/* <Header /> */}

			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route path="/login" element={<LogIn />}></Route>
				<Route path="/signup" element={<PickSignUp />}></Route>
				<Route path="/signup/patient" element={<SignUp isDoctor={false} />}></Route>
				<Route path="/signup/therapist" element={<SignUp isDoctor={true} />}></Route>
				<Route path="/quizzes" element={<Quizzes />}></Route>
				<Route path="/news" element={<News />}></Route>
				<Route path="/profile" element={
					<ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
						<MyProfile />
					</ProtectedRoute>
				} />
				<Route path="booking-calendar/:id" element={
					<ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
						<BookingCalendar />
					</ProtectedRoute>
				} />
				<Route path="/booking-form" element={
					<ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
						<BookingForm />
					</ProtectedRoute>
				} />
				<Route path="/appointment" element={
					<ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
						<Appointments />
					</ProtectedRoute>
				} />
				<Route path="/detailTherapist" element={
					<ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
						<Detail />
					</ProtectedRoute>
				} />
				<Route path="/searchTherapist" element={
					<ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
						<Search />
					</ProtectedRoute>
				} />
				<Route path="/admin" element={
					<ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
						<Approve_page />
					</ProtectedRoute>
				} />
				<Route path="/dashboard" element={
					<ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
						<Dashboard />
					</ProtectedRoute>
				} />
				<Route path="/myPatient" element={
					<ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
						<MyPatients />
					</ProtectedRoute>
				} />
				<Route path="/PatientNote" element={
					<ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
						<PatientNote />
					</ProtectedRoute>
				} />

				<Route path="/readStory" element={
					<ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
						<ReadStory />
					</ProtectedRoute> 
				}/>

				<Route path='/adviceList' element = {
					<ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
						<AdviceList/>
					</ProtectedRoute>
				} />

				<Route path='/comment' element = {<Comment/>}></Route>
				<Route path="*" element={<NotFound />} />


			</Routes>

			<Footer />
		</BrowserRouter>
	)
}

export default App;
