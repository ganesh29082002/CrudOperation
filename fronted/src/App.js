
import './App.css';
import Form1 from './components/Form1';
import EditForm1 from './components/EditForm1';

import Navbar1 from './components/Navbar1';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar1/>
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Add' element={<Form1/>} />
      <Route path='/Edit/:id' element={<EditForm1/>} />
    
  
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
