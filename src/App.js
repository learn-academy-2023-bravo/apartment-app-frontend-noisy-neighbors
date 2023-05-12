import { useState, useEffect } from "react"
import { Routes, Route, Form } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Header from "./components/Header"
import NotFound from "./pages/NotFound"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import Footer from "./components/Footer"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import "./App.css"
import MyApartments from "./pages/MyApartments"

const App = () => {
	const [currentUser, setCurrentUser] = useState(null)

	const [apartments, setApartments] = useState([])

	useEffect(() => {
		readApartment()
	}, [])

	const url = 'http://localhost:3000'

	const login = (userInfo) => {
		fetch(`${url}/login`, {
			body: JSON.stringify(userInfo),
			headers: {
				"Content-Type": 'application/json',
				"Accept": 'application/json'
			},
			method: 'POST'
		})
			.then(response => {
				localStorage.setItem("token", response.headers.get("Authorization"))
				return response.json()
			})
			.then(payload => {
				setCurrentUser(payload)
			})
			.catch(error => console.log("login errors: ", error))
	}

	const signup = (userInfo) => {
		fetch(`${url}/signup`, {
			body: JSON.stringify(userInfo),
			headers: {
				"Content-Type": 'application/json',
				"Accept": 'application/json'
			},
			method: 'POST'
		})
			.then(response => {
				// store the token
				localStorage.setItem("token", response.headers.get("Authorization"))
				return response.json()
			})
			.then(payload => {
				setCurrentUser(payload)
			})
			.catch(error => console.log("login errors: ", error))
	}


	const logout = () => {
		fetch(`${url}/logout`, {
			headers: {
				"Content-Type": 'application/json',
				"Authorization": localStorage.getItem("token") //retrieve the token 
			},
			method: 'DELETE'
		})
			.then(payload => {
				localStorage.removeItem("token")  // remove the token
				setCurrentUser(null)
			})
			.catch(error => console.log("log out errors: ", error))
	}

	const readApartment = () => {
		fetch("http://localhost:3000/apartments")
			.then((response) => response.json())
			.then((payload) => {
				setApartments(payload)
			})
			.catch((error) => console.log("Apartment read errors ", error))
	}

	const createApartment = (createdApartment) => {
		fetch("http://localhost:3000/apartments", {
			body: JSON.stringify(createdApartment),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		})
			.then((response) => response.json())
			.then(() => readApartment())
			.catch((error) => console.log("Create apartment errors: ", error))
	}

	const updateApartment = (apartment, id) => {
		fetch(`http://localhost:3000/apartments/${id}`, {
			body: JSON.stringify(apartment),

			headers: {
				"Content-Type": "application/json",
			},
			method: "PATCH",
		})
			.then((response) => response.json())
			.then(() => readApartment())
			.catch((errors) => console.log("Apartment update errors:", errors))
	}

	const deleteApartment = (id) => {
		fetch(`http://localhost:3000/apartments/${id}`, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "DELETE",
		})
			.then((response) => response.json())
			.then(() => readApartment())
			.catch((errors) => console.log("delete errors:", errors))
	}

	return (
		<>
			<Header currentUser={currentUser} logout={logout} />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route
					path="/apartmentedit/:id"
					element={<ApartmentEdit apartments={apartments} updateApartment={updateApartment} currentUser={currentUser}/>}
				/>
				<Route path="/signin" element={<SignIn login={login} />} />
				<Route path="/signup" element={<SignUp signup={signup} />} />
				<Route
					path="/apartmentindex"
					element={<ApartmentIndex apartments={apartments} />}
				/>
				<Route
					path="/apartmentshow/:id"
					element={<ApartmentShow apartments={apartments} deleteApartment={deleteApartment} />}
				/>
				<Route
					path="/myapartments"
					element={
						<MyApartments apartments={apartments} currentUser={currentUser} />
					}
				/>
				<Route
					path="/apartmentnew"
					element={<ApartmentNew createApartment={createApartment} currentUser={currentUser} />}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App