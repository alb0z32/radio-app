import './App.css';
import {BrowserRouter as Router, Routes,Route}from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import Radio from './components/Radio';
function App() {
  return (
    <div className="container">
      <Router>
        <Navbar/>
        <Routes>
          <Route path={`/`} element={<Main/>}/>
          <Route path={`/radio/:stationuuid`} element={<Radio/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
