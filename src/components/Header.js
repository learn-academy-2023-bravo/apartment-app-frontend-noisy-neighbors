import { Link } from "react-router-dom"
import '../App.css'
import Navigation from "./Navigation"


const Header = ({ currentUser, logout }) => {
    return (
      <>
      <header className="header">
      <Navigation currentUser={currentUser} logout={logout}/>
      </header>
      </>
    )
  }
  
  export default Header;