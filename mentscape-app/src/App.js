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

import "./css/style.css"

function App() {
  return (
	  <BrowserRouter>
		<Header />

		<div id="page-body">
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/login" element={<LogIn />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="/profile" element={<MyProfile />}></Route>
			</Routes>
		</div>

		<Footer />
	  </BrowserRouter>
  )
}

export default App;
