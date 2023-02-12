import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'

function App() {
  return (
    <div className="main_div">
      <Router>
        <Routes>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
