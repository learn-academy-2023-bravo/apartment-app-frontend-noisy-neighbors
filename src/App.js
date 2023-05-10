import { useState, useEffect } from 'react'
import { Routes, Route, Form } from "react-router-dom"
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import ApartmentEdit from "./pages/ApartmentEdit";
import ApartmentIndex from "./pages/ApartmentIndex";
import ApartmentNew from "./pages/ApartmentNew";
import ApartmentShow from "./pages/ApartmentShow";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import './App.css'
import mockApartments from "./mockApartments"
import mockUsers from "./mockUsers"
import MyApartments from './pages/MyApartments';


const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0]) //Simulated Login
  const [apartments, setApartments] = useState(mockApartments)

  const createApartment = (createApartment) => {

  }


  return (

    <>
    
    <Header current_user={currentUser}/>
    <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/apartmentedit/:id' element={<ApartmentEdit apartments={apartments} updateApartment={updateApartment} />} />
    <Route path='/signin' element={<SignIn />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/apartmentindex' element={<ApartmentIndex apartments={apartments}/>} />
    <Route path='/apartmentshow/:id' element={<ApartmentShow apartments={apartments}/>} />
    <Route path='/myapartments' element={<MyApartments apartments={apartments} current_user={currentUser}/>} />
    <Route path='/apartmentnew' element={<ApartmentNew createApartment={createApartment}/>} />
    <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    
    </>
    
  );
}

export default App
