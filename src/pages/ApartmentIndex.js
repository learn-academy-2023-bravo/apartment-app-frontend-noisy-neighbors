import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"
import { NavLink } from "react-router-dom"

const ApartmentIndex = ({ apartments }) => {
  return (
    <>
    <main>
      <div className="apartments-body">
        <h1 className="index-title"></h1>
        <div className="flex-apartments">
          {apartments.map((apartment, index) => {
            return (
              <div className="card-container">
              <Card
                style={{
                  width: "14rem"
                }}
                key={index}
              >
                <img alt={`apartment exterior view`} src={apartment.image} />
                <CardBody>
                  <CardTitle tag="h5">${apartment.price}/month</CardTitle>
                  <CardSubtitle>
                     {apartment.city}, {apartment.state}
                  </CardSubtitle>
                  <NavLink
                    to={`/apartmentshow/${apartment.id}`}
                    className="nav-link"
                  >
                    <Button style={{
                      backgroundColor: "black",
                      fontFamily: "Bebas Neue",

                    }}>More Details</Button>
                  </NavLink>
                </CardBody>
              </Card>
              </div>
            )
          })}
        </div>
      </div>
      </main>
    </>
  )
}

export default ApartmentIndex