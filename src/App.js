import './App.css';
import {BrowserRouter as Router, Routes,Route}from 'react-router-dom';
import Navbar from './components/Navbar'
import Main from './components/Main'
function App() {
  return (
    <div className="container">
      <Router>
        <Navbar/>
        <Routes>
          <Route path={`/`} element={<Main/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
