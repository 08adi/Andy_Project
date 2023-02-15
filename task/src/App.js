
import './App.css';
import Registration from './components/registrationform';
import Login from './components/login';
import { Routes, Route } from "react-router-dom";
import Subscribe from './components/subscribe';
import Card from './components/card';
import { useState } from 'react';
function App() {

  const [card, setCard] = useState("");

  


console.log(card);
  return (
    <>
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/login' element={<Login setCard={setCard} />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/card' element={<Card card={card} />} />
      </Routes>
    </>
  );
}

export default App;
