import React, {useState} from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { sendImageToController } from '../../util/home_api_utli'


// Destructuring props
const readFile = (files) => {
    // logic validation for existence of file(s);
    // we index at 0 here since the JSX could give us multiple files or single
    // file; either way, we get an array and we only need the first element
    // in the case of single file upload
  
    if (files && files[0]) {
      let formPayLoad = new FormData();
      formPayLoad.append('uploaded_image', files[0]);
      sendImageToController(formPayLoad)(dispatch)
    }
}


const SecondStep = ({ handleNext, handleBack, handleChange, values: { AddressLine1, city, province, date, phone, description, houserules, max_guests, num_rooms, num_beds, num_baths, price, homename }, uploadfile: {image} }) => {
  // Check if all values are not empty or if there are some error
  const isValid = AddressLine1.length > 0 && city.length > 0 && date.length > 0 && phone.length > 0
//   const [image, setImage] = useState("");
//     const fileSelectHandler = (e) => {
//         setImage(e.target.files[0])
//       };
//     const fileUploadHandler = () => {
//         if (image) {
//           console.log(image);
//           const fd = new FormData();
//           fd.append('uploadedImage', image, image.name);
//           sendImageToController(fd)(dispatch) 
//         }
//       };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address Line 1"
            name="AddressLine1"
            placeholder="Address Line 1"
            value={AddressLine1 || ""}
            margin="normal"
            onChange={handleChange}
           
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="City"
            name="city"
            placeholder="Enter your city"
            value={city || ""}
            margin="normal"
            onChange={handleChange}
           
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Province"
            name="province"
            placeholder="Enter your Province"
            value={province || ""}
            margin="normal"
            onChange={handleChange}
           
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label="Date of birth"
            name="date"
            type="date"
            defaultValue={date || "1999-12-31"}
            onChange={handleChange}
            margin="normal"
            required
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
            fullWidth
            label="Price of Home"
            name="price"
            placeholder="Enter the price of the rental"
            value={price || ""}
            onChange={handleChange}
           
            margin="normal"
            required
          />
           <TextField
            fullWidth
            label="House Name"
            name="homename"
            placeholder="Enter the name of the rental"
            value={homename || ""}
            onChange={handleChange}
           
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Description of home"
            name="description"
            placeholder="Any further info regarding home"
            value={description || ""}
            onChange={handleChange}
           
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="House Rules"
            name="houserules"
            placeholder="Any rules"
            value={houserules || ""}
            onChange={handleChange}
           
            margin="normal"
            required
          />
           <TextField
            fullWidth
            label="Max Guest"
            name="max_guests"
            placeholder="Maximum number of guests allowed"
            value={max_guests || ""}
            onChange={handleChange}
           
            margin="normal"
            required
          />
           <TextField
            fullWidth
            label="Number of Rooms"
            name="num_rooms"
            placeholder="Number of rooms available"
            value={num_rooms || ""}
            onChange={handleChange}
           
            margin="normal"
            required
          />
           <TextField
            fullWidth
            label="Number of Beds"
            name="num_beds"
            placeholder="Number of beds available"
            value={num_beds || ""}
            onChange={handleChange}
           
            margin="normal"
            required
          />
           <TextField
            fullWidth
            label="Number of baths"
            name="num_baths"
            placeholder="Number of bathrooms available"
            value={num_baths || ""}
            onChange={handleChange}
           
            margin="normal"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone number"
            name="phone"
            placeholder="i.e: xxx-xxx-xxxx"
            value={phone || ""}
            onChange={handleChange}
           
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
        <input type="file" value = {image} onChange={handleChange} />
        </Grid>
      </Grid>
      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained" color="default" onClick={handleBack} style={{ marginRight: 10 }}>
          Back
        </Button>
        <Button variant="contained" disabled={!isValid} color="primary" onClick={isValid ? handleNext : null}>
          Next
        </Button>
      </div>
    </React.Fragment>
  )
}

export default SecondStep
