
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './Containers/Register/Register';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login.jsx';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Routes>

          <Route path="/Home" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
