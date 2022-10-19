import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Event from './components/events/Event';
import Navbar from './components/navbar/Navbar';
import Register from './components/session/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import SplashScreen from './components/session/SplashScreen';
import Login from './components/session/Login';
import MyReservations from './components/reservation/Myreservations';
import AddReservation from './components/reservation/AddReservation';
import EventDetails from './components/events/EventDetails';
import SignUp from './components/users/SignUp';
import Login from './components/users/Login';
import SplashScreen from './components/session/SplashScreen';
import './App.css';

function App() {
  return (
    <div className="App">
      {(sessionStorage.getItem('loginToken')) ? <Navbar /> : null }
      <Routes>
        <Route exact path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Event />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Addreservation" element={<AddReservation />} />
        <Route path="/Myreservations" element={<MyReservations />} />
        <Route path="/events/:eventID" element={<EventDetails />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
