import logo from './logo.svg';
import './App.css';
import Header from './Componenets/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Cards from './Componenets/Cards';
import CardDetails from './Componenets/CardDetails';

function App() {
  return (
     <>
     <Header/>
     <Routes>
      <Route path='/' element={<Cards/>}/>
      <Route path='/cart' element={<CardDetails/>}/>
     </Routes>
     </>
      );
}

export default App;
