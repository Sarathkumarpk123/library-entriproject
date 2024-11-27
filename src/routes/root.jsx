
import React from 'react';
import Header from './Components/Header';
import { Outlet } from "react-router-dom";

 function Root() {
  return (
    <>
        <Header />
        <Outlet />
        <footer></footer>
    </>
    
   
  );
}
export default Root;



