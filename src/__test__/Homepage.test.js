import { screen, render } from "@testing-library/react"
import Homepage from "../pages/Homepage"

describe("<Homepage />", () => {
    it("renders the home page for the user", () => {
        render(<Homepage />)
        const element = screen.getByText("Home")
        expect(element).toBeInTheDocument()
        screen.logTestingPlaygroundURL()
    })
})