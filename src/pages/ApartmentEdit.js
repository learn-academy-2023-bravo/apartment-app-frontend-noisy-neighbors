import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const ApartmentEdit = ({ apartments, updateApartment }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  let currentApartment = apartments?.find((apartment) => apartment.id === +id)

  const [editApartment, setEditApartment] = useState({
    street: currentApartment.street,
    unit: currentApartment.unit,
    city: currentApartment.city,
    state: currentApartment.state,
    square_footage: currentApartment.square_footage,
    price: currentApartment.price,
    bedrooms: currentApartment.bedrooms,
    bathrooms: currentApartment.bathrooms, 
    pet: currentApartment.pet,
    image: currentApartment.image,
    ac_unit: currentApartment.ac_unit,
    major_appliances: currentApartment.major_appliances,
    parking: currentApartment.parking,
    hoa: currentApartment.hoa
  })
  const handleChange = (e) => {
    setEditApartment({ ...editApartment, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    updateApartment(editApartment, currentApartment.id)
    navigate(`/apartmentshow/${id}`)
  }
  return(
    <div>
      <Form 
      className="edit-apartment-form">
        <FormGroup>
          <Label for="apartment-street">Street</Label>
          <Input
          id="apartment-street"
          name="street"
          placeholder="Enter Street"
          type="text"
          onChange={handleChange}
          value={editApartment.street}
          />
        </FormGroup>

        <FormGroup>
          <Label for="apartment-price">Price</Label>
          <Input
          id="apartment-price"
          name="price"
          placeholder="Enter Price"
          type="text"
          onChange={handleChange}
          value={editApartment.price}
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
          value={editApartment.unit}
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
          value={editApartment.city}
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
          value={editApartment.state}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment-square-footage">Square Footage</Label>
          <Input
          id="apartment-square-footage"
          name="square_footage"
          placeholder="Enter square-footage"
          type="text"
          onChange={handleChange}
          value={editApartment.square_footage}
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
          value={editApartment.bedrooms}
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
          value={editApartment.bathrooms}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment-pet">Pet</Label>
          <Input
          id="apartment-pet"
          name="pet"
          placeholder="Are pets allowed?"
          type="text"
          onChange={handleChange}
          value={editApartment.pet}
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
          value={editApartment.image}
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
          value={editApartment.ac_unit}
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
          value={editApartment.major_appliances}
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
          value={editApartment.parking}
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
          value={editApartment.hoa}
          />
        </FormGroup>
        <Button className="submit-button" onClick={handleSubmit}>Submit Updated Apartment</Button>
      </Form>
    </div>
  )
}

  







export default ApartmentEdit