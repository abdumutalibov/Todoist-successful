import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./components/Today/Today";
import Sidebar from "./components/Sidebar/Sidebar";
import TopNav from "./components/TopNav/TopNav";
import MainLayout from './Layout/MainLayout';
import Upcoming from "./components/Upcoming/Upcoming";
import Filter from "./components/Filter/Filter";
function App() {
  return (
  <Router>
          <TopNav/>
          <div className="container">

      
    <Sidebar/>
    <Routes>

      <Route path='/' element={<MainLayout/>}/>
      <Route path='/user' element={<Homepage/>}/>
      <Route path='/today' element={<Upcoming/>}/>
      <Route path='/filter' element={<Filter/>}/>
    </Routes>
        </div>
  </Router>
  );
}

export default App;
