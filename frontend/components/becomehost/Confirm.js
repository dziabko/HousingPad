import React, { Fragment } from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import { createHost } from '../../util/home_api_utli'
import * as HomeApiUtil from '../../util/home_api_utli';

// Async function to get Coordinates of city
async function geoCoder(address, province, cityStr){
    console.log(cityStr)
    // var cityNameArr = cityStr.split(',');
    // var city = cityNameArr[0];
    var latitude = 0;
    var longitude = 0;

    const response  = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}'+'${cityStr}'+'${province}&key=${process.env.api_key}`);
    const json = await response.json();
    latitude = json.results[0].geometry.location.lat;
    longitude = json.results[0].geometry.location.lng;
    var coord = {lat: latitude, lng: longitude};
    console.log(coord);
    return coord;
}

// Destructure props

const Confirm = ({ handleNext, handleBack, values, uploadfile }) => {
  const { firstName, lastName, email, gender, date, phone, city, province, AddressLine1 } = values
    
  const handleSubmit = async () => {
    // Do whatever with the values
    console.log(values)
    console.log(uploadfile)

    var formData = new FormData();

    for ( var key in values ) {
        console.log(key)
        console.log(values[key])
        formData.append(key, values[key]);
    }
    //formData.append(1, uploadfile)

    formData.append("file", uploadfile);

    let getlatlong = await geoCoder(AddressLine1, city, province);
    console.log(getlatlong);
    values.coordinates = getlatlong;

    for( var coord in getlatlong){
        formData.append(coord, getlatlong[coord])
    }

    // var completeNewObj = {
    //     ...newObject,
    //     ...values
    // }

    // console.log(completeNewObj)
    //createHost(formData)(dispatch);
    HomeApiUtil.createHost(formData).then(() => handleNext())

    // Show last success message
    //handleNext()
  }

  return (
    <Fragment>
      <List disablePadding>
        <ListItem>
          <ListItemText primary="First Name" secondary={firstName} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Last Name" secondary={lastName} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Email Address" secondary={email} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Gender" secondary={gender} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Date of birth" secondary={date} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="City" secondary={city} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="phone" secondary={phone.length > 0 ? phone : "Not Provided"} />
        </ListItem>
      </List>

      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained" color="default" onClick={handleBack}>
          Back
        </Button>
        <Button style={{ marginLeft: 10 }} variant="contained" color="secondary" onClick={handleSubmit}>
          Confirm & Continue
        </Button>
      </div>
    </Fragment>
  )
}

export default Confirm
