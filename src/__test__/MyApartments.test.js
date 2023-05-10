import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import MyApartments from "../pages/MyApartments"
import mockApartments from "../mockApartments"
import mockUsers from "../mockUsers"

describe("<MyApartments />", () => {
    it("renders the my apartments page for the user", () => {
        render(
            <BrowserRouter>
            <MyApartments apartments={mockApartments} current_user={mockUsers[0]}/>
            </BrowserRouter>
        )
        const element = screen.getByText("My Apartments")
        expect(element).toBeInTheDocument()
    })
})