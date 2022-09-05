import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import './css/app.css';
import Home from './pages/Home';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';

function App() {
  return (
    <>
    
    <Menu/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/add' element={<TechnoAdd/>}/>
      <Route path='/list' element={<TechnoList/>}/>

    </Routes>
    
    </>
    
  );
}

export default App;
//46:19