import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import add from '../assets/add.png'

const ApartmentNew = ({createApartment, currentUser}) => {
  
  const navigate = useNavigate()

  const [newApartment, setNewApartment] = useState({
    user_id: currentUser.id,
    // id: '',
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
    navigate ("/myapartments")
  }
    
  return(
    <>
    <img className='addlisting'src={add} />
        
      <Form 
      className="new-apartment-form">
        <FormGroup>
          <Label for="apartment-street" className='apartmentnew'>Street</Label>
          <Input
          id="apartment-street"
          name="street"
          placeholder="Enter Street"
          type="text"
          onChange={handleChange}
          value={newApartment.street}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment-price" className='apartmentnew'>Price</Label>
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
          <Label for="apartment-unit" className='apartmentnew'>Unit</Label>
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
          <Label for="apartment-city" className='apartmentnew'>City</Label>
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
          <Label for="apartment-state" className='apartmentnew'>State</Label>
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
          <Label for="apartment-square-footage" className='apartmentnew'>Square Footage</Label>
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
          <Label for="apartment-bedrooms" className='apartmentnew'>Bedrooms</Label>
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
          <Label for="apartment-bathrooms" className='apartmentnew'>Bathrooms</Label>
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
          <Label for="apartment-pet" className='apartmentnew'>Pet</Label>
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
          <Label for="apartment-image" className='apartmentnew'>Image</Label>
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
          <Label for="apartment-ac-unit" className='apartmentnew'>A/C Unit</Label>
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
          <Label for="apartment-major-appliances" className='apartmentnew'>Major Appliances</Label>
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
          <Label for="apartment-parking" className='apartmentnew'>Parking</Label>
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
          <Label for="apartment-hoa" className='apartmentnew'>HOA</Label>
          <Input
          id="apartment-hoa"
          name="hoa"
          placeholder="HOA?"
          type="text"
          onChange={handleChange}
          value={newApartment.hoa}
          />
        </FormGroup>
        
      </Form>
      <Button className="submit" onClick={handleClick}>Submit</Button>
    </>
  )
}

export default ApartmentNew