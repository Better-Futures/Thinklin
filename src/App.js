import React, {useEffect} from 'react';
import GlobalStyle from './globalStyles';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {  Login  } from './components';
import { Home } from './containers';
import { fetchUser} from './utils/fetchuser';


const App = () => {
  const navigate = useNavigate();

  
  useEffect(() => {
    const user= fetchUser();
    if(!user) navigate('/login')
    
  })
  return (
  <>
  <GlobalStyle/>
  <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/*' element={<Home />} />         
  </Routes>
  </>

    
  );
}

export default App;