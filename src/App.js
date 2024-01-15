import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
// import UnderManu from './pages/UnderManu';
import './scss/register.scss';
import './scss/login.scss';
import './scss/home.scss';
import './scss/error.scss';
// import Design from './components/Design';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path='/' element={<UnderManu />}/> */}
          <Route path='/' element={<HomePage />}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

