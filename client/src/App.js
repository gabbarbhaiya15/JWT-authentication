//App.js

import  React, { useState } from 'react';
import './App.css';
import Form from './Component/Form';
import  { BrowserRouter as Router,Switch,Route, BrowserRouter, Routes} from "react-router-dom"
import Display from './Component/Display';


function App() {
  const [Id,setid] = useState("") 
  const [Datas, setDatas] = useState(null);

  const setlogin = (data) => {
    setDatas(data.input);
    setid(data.id);
  };
  return (

  <BrowserRouter>

  <Routes>
 
< Route path='/' element={<Form setlogin={setlogin} />}/>
< Route path='/display' element={<Display setlogin={Datas} />}/>
    
  </Routes>
  </BrowserRouter>
  );
}

export default App;
