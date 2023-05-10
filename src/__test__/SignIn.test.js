import { screen, render } from "@testing-library/react"
import SignIn from "../components/SignIn"

describe("<SignIn />", () => {
    it("renders the Log in page for the user", () => {
        render(<SignIn />)
        const element = screen.getByText("Log In")
        expect(element).toBeInTheDocument()
    })
})