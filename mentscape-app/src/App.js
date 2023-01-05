import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom'
import { Footer } from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';
import { LogIn } from './pages/common/LogIn';
import { SignUp } from './pages/common/SignUp';
import { MyProfile } from './pages/common/MyProfile';
import { PickSignUp } from './pages/common/PickSignUp';
import Quizzes from "./pages/patients/Quizzes";
import Appointments from './pages/patients/Appointments';
import BookingCalendar from './pages/patients/BookingCalendar';
import Search from './pages/patients/Search';
import News from './pages/common/News';
import Home from './pages/common/Home';
import { Dashboard } from './pages/therapist/Dashboard';
import { NotFound } from './pages/common/NotFound';
import PatientNote from './pages/therapist/PatientNote';
import { useAuth } from './firebase/authFunc';
import { ReadStory } from './pages/patients/ReadStory';
import { Comment } from './pages/patients/Comment';
import { AdviceList } from './pages/patients/AdviceList';
import Meditate from './pages/patients/MeditationPage/Meditate';
import "./css/style.css"



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
				<Route path="/meditate" element={<Meditate />}></Route>
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
				<Route path="/appointment" element={
					<ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
						<Appointments />
					</ProtectedRoute>
				} />
				<Route path="/searchTherapist" element={
					<ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
						<Search />
					</ProtectedRoute>
				} />
				<Route path="/dashboard" element={
					<ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
						<Dashboard />
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
				} />

				<Route path='/myStory' element={
					<ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
						<AdviceList />
					</ProtectedRoute>
				} />

				<Route path='/comment' element={<Comment />}></Route>
				<Route path="*" element={<NotFound />} />

			</Routes>

			<Footer />
		</BrowserRouter>
	)
}

export default App;
