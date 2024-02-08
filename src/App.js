import { BrowserRouter as Router,Routes, Route, Switch } from "react-router-dom";
import './App.css';
import { HomePage } from './pages/HomePage';


import Navbar from "./components/Navbar";
import ImageDetail from "./pages/ImageDetail";
import { ContactUs } from "./pages/ContactUs";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar/>}/>
      </Routes>

       <Routes>
        
        <Route path="/" element= {<HomePage/>} />
        <Route path="/ContactUs" element= {<ContactUs/>} />
        <Route path="/Login" element= {<Login/>} />
        <Route path="/ImageDetail/:id" element={<ImageDetail />} />
        <Route path="/Register" element= {<Register/>} />
       
        
      </Routes>
    </div>
  );
}

export default App;
