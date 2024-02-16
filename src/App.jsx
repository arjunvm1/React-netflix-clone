
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Login/Home'
import Main from './components/Main/Main'
import Signin from './components/SignIn/Signin';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
