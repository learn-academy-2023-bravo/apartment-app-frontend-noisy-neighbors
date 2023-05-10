import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ApartmentNew = ({createApartment}) => {
  
  const navigate = useNavigate()

  const [newApartment, setNewApartment] = useState({
    user_id: '',
    id: '',
    street: "",
    unit: "",
    city: "",
    state: "",
    square_footage: '',
    price: "",
    bedrooms: '',
    bathrooms: '',
    pet: "",
    image: "",
    ac_unit: "",
    major_appliances: "",
    parking: "",
    hoa:  ""
  })

  const handleChange = (e) => {
    setNewApartment({...newApartment, [e.target.name]: e.target.value})
  }

  const handleClick = () => {
    createApartment(newApartment)
    navigate ("/apartmentindex")
  }
    
  return(
    <><h3 className="page_heading">Add A Listing</h3>
      <Form 
      className="new-apartment-form">
        <FormGroup>
          <Label for="apartment-price">Price</Label>
          <Input
          id="apartment-price"
          name="price"
          placeholder="Enter Price"
          type="text"
          onChange={handleChange}
          value={newApartment.price}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment-unit">Unit</Label>
          <Input
          id="apartment-unit"
          name="unit"
          placeholder="Enter unit number"
          type="text"
          onChange={handleChange}
          value={newApartment.unit}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment-city">City</Label>
          <Input
          id="apartment-city"
          name="city"
          placeholder="Enter City"
          type="text"
          onChange={handleChange}
          value={newApartment.city}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment-state">State</Label>
          <Input
          id="apartment-state"
          name="state"
          placeholder="Enter State"
          type="text"
          onChange={handleChange}
          value={newApartment.state}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment-square-footage">Sq Ft.</Label>
          <Input
          id="apartment-square-footage"
          name="square_footage"
          placeholder="Enter square-footage"
          type="text"
          onChange={handleChange}
          value={newApartment.square_footage}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment-bedrooms">Bedrooms</Label>
          <Input
          id="apartment-bedrooms"
          name="bedrooms"
          placeholder="Enter bedrooms"
          type="text"
          onChange={handleChange}
          value={newApartment.bedrooms}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment-bathrooms">Bathrooms</Label>
          <Input
          id="apartment-bathrooms"
          name="bathrooms"
          placeholder="Enter bathrooms"
          type="text"
          onChange={handleChange}
          value={newApartment.bathrooms}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment-pet">Pets</Label>
          <Input
          id="apartment-pet"
          name="pet"
          placeholder="Are pets allowed?"
          type="text"
          onChange={handleChange}
          value={newApartment.pet}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment-image">Image</Label>
          <Input
          id="apartment-image"
          name="image"
          placeholder="Upload image"
          type="text"
          onChange={handleChange}
          value={newApartment.image}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment-ac-unit">A/C Unit</Label>
          <Input
          id="apartment-ac-unit"
          name="ac_unit"
          placeholder="A/C unit included?"
          type="text"
          onChange={handleChange}
          value={newApartment.ac_unit}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment-major-appliances">Major Appliances</Label>
          <Input
          id="apartment-major-appliances"
          name="major_appliances"
          placeholder="Major appliances?"
          type="text"
          onChange={handleChange}
          value={newApartment.major_appliances}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment-parking">Parking</Label>
          <Input
          id="apartment-parking"
          name="parking"
          placeholder="Parking?"
          type="text"
          onChange={handleChange}
          value={newApartment.parking}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment-hoa">HOA</Label>
          <Input
          id="apartment-hoa"
          name="hoa"
          placeholder="HOA?"
          type="text"
          onChange={handleChange}
          value={newApartment.hoa}
          />
        </FormGroup>
        <Button className="submit" onClick={handleClick}>Submit</Button>
      </Form>
    </>
  )
}

export default ApartmentNew