import { useState, useEffect } from 'react'
import { Routes, Route, Form } from "react-router-dom"
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import ApartmentEdit from "./pages/ApartmentEdit";
import ApartmentIndex from "./pages/ApartmentIndex";
import ApartmentNew from "./pages/ApartmentNew";
import ApartmentShow from "./pages/ApartmentShow";
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex"
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import './App.css'
import mockApartments from "./mockApartments"
import mockUsers from "./mockUsers"


const App = () => {







  return (

    <>
    
    <Header />
    <Homepage />
    <ApartmentEdit />
    <ApartmentIndex />
    <ApartmentShow />
    <ApartmentProtectedIndex />
    <ApartmentNew />
    <SignIn />
    <SignUp />
    <NotFound />
    <Footer />
    
    </>
    
  );
}

export default App
