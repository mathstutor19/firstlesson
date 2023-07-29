import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Filter from './components/Card/Filter/Filter';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Filter></Filter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<Details />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
