import { render, screen } from "@testing-library/react"
import ApartmentNew from "../pages/ApartmentNew"
import { BrowserRouter } from 'react-router-dom'

describe("<ApartmentNew />", () => {
  it("renders a new apartment form", () => {
    render(
      <BrowserRouter>
        <ApartmentNew />
      </BrowserRouter>
    )

    const streetInput=screen.getByRole('textbox', {street: "Street"})
    expect(streetInput).toBeInTheDocument()
    
    const unitInput=screen.getByRole('textbox', {unit: "Unit"})
    expect(unitInput).toBeInTheDocument()
    
    const cityInput=screen.getByRole('textbox', {city: "City"})
    expect(cityInput).toBeInTheDocument()
    
    const stateInput=screen.getByRole('textbox', {state: "State"})
    expect(stateInput).toBeInTheDocument()
    
    const square_footageInput=screen.getByRole('textbox', {square_footage: "Square Footage"})
    expect(square_footageInput).toBeInTheDocument()
    
    const priceInput=screen.getByRole('textbox', {price: "Price"})
    expect(priceInput).toBeInTheDocument()
    
    const bedroomsInput=screen.getByRole('textbox', {bedrooms: "Bedrooms"})
    expect(bedroomsInput).toBeInTheDocument()
    
    const bathroomsInput=screen.getByRole('textbox', {bathrooms: "Bathrooms"})
    expect(bathroomsInput).toBeInTheDocument()
    
    const petInput=screen.getByRole('textbox', {pet: "Pet"})
    expect(petInput).toBeInTheDocument()
    
    const imageInput=screen.getByRole('textbox', {image: "Image"})
    expect(imageInput).toBeInTheDocument()
    
    const ac_unitInput=screen.getByRole('textbox', {ac_unit: "A/C Unit"})
    expect(ac_unitInput).toBeInTheDocument()
    
    const major_appliancesInput=screen.getByRole('textbox', {major_appliances: "Major Appliances"})
    expect(major_appliancesInput).toBeInTheDocument()
    
    const parkingInput=screen.getByRole('textbox', {parking: "Parking"})
    expect(parkingInput).toBeInTheDocument()
    
    const hoaInput=screen.getByRole('textbox', {hoa: "HOA"})
    expect(hoaInput).toBeInTheDocument()
  })  
})