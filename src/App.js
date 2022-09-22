import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Hotel from "./pages/Hotel/Hotel";
import Navbar from './component/Navbar/Navbar';
import Login from './pages/login/Login';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/hotels" element={<List/>} />
       <Route path="/hotels/:id" element={<Hotel/>} />
       <Route path="/login" element={<Login/>} />
     </Routes>
    
    </BrowserRouter>
  );
}

export default App;
