
import './App.css';
import SideBar from './componnets/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Display from './componnets/Display';
import HomePage from './pages/HomePage';


function App() {
  return (
    <>
    <div>
      <Router>
        <div className='container'>
          <SideBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/Post" element={<Display />} />
            <Route path="/Gallery" element={<Display />} />
            <Route path="/Todo" element={<Display />} />
          </Routes>
        </div>
      </Router> 
     
      </div>
    </>
  );
}

export default App;
