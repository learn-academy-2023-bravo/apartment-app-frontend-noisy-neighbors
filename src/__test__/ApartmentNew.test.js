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
    
    const streetInput=screen.getByRole('textbox', {name: /street/i})
    expect(streetInput).toBeInTheDocument()
    
    const unitInput=screen.getByRole('textbox', {name: /unit/i})
    expect(unitInput).toBeInTheDocument()
    
    const cityInput=screen.getByRole('textbox', {name: /city/i})
    expect(cityInput).toBeInTheDocument()
    
    const stateInput=screen.getByRole('textbox', {name: /state/i})
    expect(stateInput).toBeInTheDocument()
    
    const square_footageInput=screen.getByRole('textbox', {name: /square_footage/i})
    expect(square_footageInput).toBeInTheDocument()
    
    const priceInput=screen.getByRole('textbox', {name: /price/i})
    expect(priceInput).toBeInTheDocument()
    
    const bedroomsInput=screen.getByRole('textbox', {name: /bedrooms/i})
    expect(bedroomsInput).toBeInTheDocument()
    
    const bathroomsInput=screen.getByRole('textbox', {name: /bathrooms/i})
    expect(bathroomsInput).toBeInTheDocument()
    
    const petInput=screen.getByRole('textbox', {name: /pet/i})
    expect(petInput).toBeInTheDocument()
    
    const imageInput=screen.getByRole('textbox', {name: /image/i})
    expect(imageInput).toBeInTheDocument()
    
    const ac_unitInput=screen.getByRole('textbox', {name: /ac_unit/i})
    expect(ac_unitInput).toBeInTheDocument()
    
    const major_appliancesInput=screen.getByRole('textbox', {name: /major_appliances/i})
    expect(major_appliancesInput).toBeInTheDocument()
    
    const parkingInput=screen.getByRole('textbox', {name: /parking/i})
    expect(parkingInput).toBeInTheDocument()
    
    const hoaInput=screen.getByRole('textbox', {name: /hoa/i})
    expect(hoaInput).toBeInTheDocument()
    screen.logTestingPlaygroundURL()
  })  
})