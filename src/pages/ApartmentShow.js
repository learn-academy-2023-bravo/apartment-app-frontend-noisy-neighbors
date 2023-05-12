import React from "react"
import { NavLink, useParams } from "react-router-dom"
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ApartmentShow = ({apartments}) => {
    const { id } = useParams()
  
  const currentApartment = apartments?.find((apartment) => apartment.id === +id)
  console.log("current apartment: ", currentApartment)
  return (
    <><h3>Show Apartment</h3>
    <div className="apartments-body">
      {currentApartment &&      
        <Card className='apartment-card'>
          <CardImg top width="100%" src={currentApartment.image} alt="" />
          <CardBody className="apartment-text apartment-font-size">
            <div className="grid-row">
              <div className="show-apartment-info">
                <CardTitle><b>Price: ${currentApartment.price}</b></CardTitle>
                <CardSubtitle>{currentApartment.street} </CardSubtitle>
                <CardSubtitle>{currentApartment.city}, {currentApartment.state}</CardSubtitle>
                <CardSubtitle>Unit: {currentApartment.unit}</CardSubtitle>
                <CardSubtitle>Sq. Ft.: {currentApartment.square_footage}</CardSubtitle>
                <CardSubtitle>Bedrooms: {currentApartment.bedrooms}, Baths:{currentApartment.bathrooms} </CardSubtitle>
                <CardSubtitle>Pets: {currentApartment.pet}</CardSubtitle>
                <CardSubtitle> A/C Unit: {currentApartment.ac_unit}</CardSubtitle>
                <CardSubtitle>Major Appliances: {currentApartment.major_appliances}</CardSubtitle>
                <CardSubtitle>Parking: {currentApartment.parking} </CardSubtitle>
                <CardSubtitle>HOA: {currentApartment.hoa}</CardSubtitle>
              </div>
            </div>
          </CardBody>
        </Card>
      }
    </div>
    </>
  )
}


export default ApartmentShow