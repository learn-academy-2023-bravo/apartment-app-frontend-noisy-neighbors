import { screen, render } from "@testing-library/react"
import SignUp from "../components/SignUp"

describe("<SignUp />", () => {
    it("renders the sign up page for the user", () => {
        render(<SignUp />)
        const element = screen.getByText("Sign Up!")
        expect(element).toBeInTheDocument()
    })
})