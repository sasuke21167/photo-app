import React, { Suspense } from 'react';
import {BrowserRouter, Redirect, Route, Routes, Navigate} from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import './App.scss';

const Photo = React.lazy(() => import('./features/Photo'));

function App()  {
  return(
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>  
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/photos" />} /> 
          <Route path="/photos/*" element={<Photo />} />
          <Route element={<NotFound />} />
        </Routes>     
      </Suspense>
  </div>
  );
}

export default App;
