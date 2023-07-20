import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<Details />}></Route>
          {/* <Route path="/uylar" element={<Uylar />}></Route>
          <Route path="/kutubxonalar" element={<Kutubxona />}></Route>
          <Route path="/ishlar" element={<Ishlar />}></Route>
          <Route path="/universitetlar" element={<Universitetlar />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/uylar/:id" element={<SingleHomePage />}></Route>
          <Route path="/ishlar/:id" element={<SingleJobPage />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
