import { render, screen } from "@testing-library/react";
import ApartmentEdit from "../pages/ApartmentEdit";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import mockApartments from "../mockApartments";

describe("<ApartmentEdit />", () => {
  it("renders a current apartment edit form", () => {
    render(
      <MemoryRouter initialEntries= {
        ["/apartmentedit/1"]
      }>
        <Routes>
        <Route path='/apartmentedit/:id' element={<ApartmentEdit apartments={mockApartments}/>}/>
        </Routes>
      </MemoryRouter>
    );

    const streetInput = screen.getByRole("textbox", { name: "Street" });
    expect(streetInput).toBeInTheDocument();

    const unitInput = screen.getByRole("textbox", { name: "Unit" });
    expect(unitInput).toBeInTheDocument();

    const cityInput = screen.getByRole("textbox", { name: "City" });
    expect(cityInput).toBeInTheDocument();

    const stateInput = screen.getByRole("textbox", { name: "State" });
    expect(stateInput).toBeInTheDocument();

    const square_footageInput = screen.getByRole("textbox", {
      name: "Square Footage",
    });
    expect(square_footageInput).toBeInTheDocument();

    const priceInput = screen.getByRole("textbox", { name: "Price" });
    expect(priceInput).toBeInTheDocument();

    const bedroomsInput = screen.getByRole("textbox", { name: "Bedrooms" });
    expect(bedroomsInput).toBeInTheDocument();

    const bathroomsInput = screen.getByRole("textbox", { name: "Bathrooms" });
    expect(bathroomsInput).toBeInTheDocument();

    const petInput = screen.getByRole("textbox", { name: "Pet" });
    expect(petInput).toBeInTheDocument();

    const imageInput = screen.getByRole("textbox", { name: "Image" });
    expect(imageInput).toBeInTheDocument();

    const ac_unitInput = screen.getByRole("textbox", { name: "A/C Unit" });
    expect(ac_unitInput).toBeInTheDocument();

    const major_appliancesInput = screen.getByRole("textbox", {
      name: "Major Appliances",
    });
    expect(major_appliancesInput).toBeInTheDocument();

    const parkingInput = screen.getByRole("textbox", { name: "Parking" });
    expect(parkingInput).toBeInTheDocument();

    const hoaInput = screen.getByRole("textbox", { name: "HOA" });
    expect(hoaInput).toBeInTheDocument();
  });
});
