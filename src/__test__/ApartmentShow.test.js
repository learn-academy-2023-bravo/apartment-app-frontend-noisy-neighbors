import { screen, render } from "@testing-library/react"
import ApartmentShow from "./pages/ApartmentShow"
import mockApartments from "../mockApartments"
import { MemoryRouter } from "react-router-dom"

describe("<ApartmentShow />", () => {
    it("renders an apartment", () => {
        render(
          <MemoryRouter initalEntries= {
            ["/apartmentshow/1"]
          }>
            <ApartmentShow apartments={mockApartments}/>
          </MemoryRouter>
        )
        
        const element = screen.getByText("Show Apartment")
        expect(element).toBeInTheDocument()
        screen.logTestingPlaygroundURL()
    })
})