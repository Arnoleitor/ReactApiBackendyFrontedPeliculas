
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './Containers/Register/Register';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login.jsx';
import Profile from './Containers/Profile/Profile.jsx';
import Peliculas from './Containers/peliculas/Peliculas.jsx';
import Header from './Components/Header/Header.jsx';
import Admin from './Containers/Admin/Admin.jsx';
// import InfoPeliculas from './Containers/InfoPeliculas/infoPeliculas';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/peliculas" element={<Peliculas/>}/>
          <Route path="/admin" element={<Admin/>}/>
          {/* <Route path="/infopeliculas" element={<InfoPeliculas/>}/> */}
        </Routes>
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
