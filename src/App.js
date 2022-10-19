import React from 'react';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import { Update } from './Update';
import { Read } from './Read';
import { Create } from './Create';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='header'>
         <Link to={'/'} className="home">Home</Link>
         <Link to={'/create'} className="create">Create</Link>
         <Link to={'/read'} className="read">Read</Link>
         <Link to={'/update'} className="update">Update</Link>
      </div>
     <Routes className="main">
        <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<Create/>} ></Route>
          <Route path='/read' element={<Read/>} ></Route>
          <Route path='/update' element={<Update/>} ></Route>      
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function Home(){
  return(
    <div className='home-page'>
      React CRUD Operations
    </div>
  )
}