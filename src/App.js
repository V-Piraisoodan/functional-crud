import React from 'react';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import { Update } from './student/Update';
import { Readstudent } from './student/Read';
import { Createstudent } from './student/Createstudent';
import { Createteacher } from './teacher/Createteacher';
import { Readteacher } from './teacher/Readteacher';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='header'>
         <Link to={'/'} className="home">Home</Link>
         <Link to={'/createstudent'} className="create">Create Student</Link>
         <Link to={'/createteacher'} className="create">Create Teacher</Link>
         <Link to={'/readstudent'} className="read">Student Data</Link>
         <Link to={'/readteacher'} className="read">Teacher Data</Link>
         <Link to={'/update'} className="update">Update</Link>
      </div>
     <Routes className="main">
        <Route path='/' element={<Home/>}></Route>
          <Route path='/createstudent' element={<Createstudent/>} ></Route>
          <Route path='/createteacher' element={<Createteacher/>} ></Route>
          <Route path='/readstudent' element={<Readstudent/>} ></Route>
          <Route path='/read' element={<Readteacher/>} ></Route>
          <Route path='/update' element={<Update/>} ></Route>      
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function Home(){
  return(
    <div className='home-page'>
      STUDENT & TEACHER MANAGEMENT
    </div>
  )
}