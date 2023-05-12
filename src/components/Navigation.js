import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink, Link } from "react-router-dom"
import world from "../assets/world.png"

const Navigation = ({ current_user }) => {
    return (
        <>
            <Nav className="nav justify-content-left">
                {current_user &&
                    <>
                        <NavItem>
                            <NavLink to="/myapartments" className="nav-link">
                                My Listings
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/apartmentnew" className="nav-link">
                                Create Listings
                            </NavLink>
                        </NavItem>
                    </>
                }
                {!current_user &&
                    <>
                        <NavItem>
                            <NavLink to="/apartmentindex" className="nav-link">
                                View Listings
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/signin" className="nav-link">
                                Sign In
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/signup" className="nav-link">
                                Sign Up
                            </NavLink>
                            <Link to="/">
        <img src={world} alt="Clickable Image" className="centered-image" />
      </Link>
                        </NavItem>

                    </>
                }
            </Nav>



        </>
    )
}

export default Navigation