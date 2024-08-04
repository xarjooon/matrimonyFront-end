import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Auth from './components/Auth';
import PersonalDetails from './components/PersonalDetails';

function App() {
  return (
   <>
   <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register={"register"}/>}/>
      <Route path='/personalDetails' element={<PersonalDetails/>}/>

    </Routes>
   </div>
   </>
  );
}

export default App;
