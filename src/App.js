import AllProject from './components/ReadProject';
import AddProject from './components/CreateProject';
import UpdateProject from './components/UpdateProject';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar className = "App" />
      <Routes className = 'myroutes' >
        <Route path="/" element={<AllProject /> } />
        <Route path="/add" element={<AddProject />} />
        <Route path="/edit/:id" element={<UpdateProject />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;