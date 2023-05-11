import { Link } from "react-router-dom"
import '../App.css'
import Navigation from "./Navigation"
import logoImage from "../assets/logoImage.png"


const Header = ({ current_user }) => {
    return (
      <>
      <header className="header">
      <img src={logoImage} alt="Logo" className="logo-image" />
        <h3>Renter's Delight</h3>
        <Navigation current_user={current_user}/>
      </header>
      </>
    )
  }
  
  export default Header;