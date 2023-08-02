import React, { useState } from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import FirstStep from "./FirstStep"
import SecondStep from './SecondStep'
import Confirm from "./Confirm"
import Success from "./Success"
// import formValidation from "../Helper/formValidation"

// Step titles
const labels = ["Provide your info", "Provide Home info", "Confirmation"]

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  date: "",
  city: "",
  province: "",
  AddressLine1: "",
  phone: "",
  description: "",
  houserules: "",
  homename: "",
  price: 0,
  max_guests: 0,
  num_rooms: 0,
  num_beds: 0,
  num_baths: 0
}

const fieldsValidation = {
  firstName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20
  },
  lastName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20
  },
  email: {
    error: "",
    validate: "email"
  },
  gender: {},
  date: {},
  city: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 20
  },
  phone: {
    error: "",
    validate: "phone",
    maxLength: 15
  },
  AddressLine1: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 50
  }
}

const StepForm = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [image, setImage] = useState("")
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})

  // Proceed to next step
  const handleNext = () => setActiveStep(prev => prev + 1)
  // Go back to prev step
  const handleBack = () => setActiveStep(prev => prev - 1)

  // Handle form change
  const handleChange = e => {
    const { name, value } = e.target


    // Set values
    setFormValues(prev => ({
      ...prev,
      [name]: value,
    }))

    if (e.target.files){
        setImage(e.target.files[0])
    }
    // set errors
    // const error = formValidation(name, value, fieldsValidation) || ""

    setFormErrors({
    //   [name]: error
    })
  }

  const handleSteps = step => {
    switch (step) {
      case 0:
        return (
          <FirstStep handleNext={handleNext} handleChange={handleChange} values={formValues} />
        )
      case 1:
        return (
            <SecondStep handleNext={handleNext} handleBack={handleBack} handleChange={handleChange} values={formValues} uploadfile={image} />
          )
      case 2:
        return <Confirm handleNext={handleNext} handleBack={handleBack} values={formValues}  uploadfile={image}/>
      default:
        break
    }
  }

  return (
    <React.Fragment>
      {activeStep === labels.length ? (
        // Last Component
        <Success values={formValues} />
      ) : (
        <React.Fragment>
          <Box style={{ margin: "30px 0 50px" }}>
            <Typography variant="h4" align="center">
            Host your home
            </Typography>
            <Typography variant="subtitle2" align="center" style={{ margin: "10px 0" }}>
            Become a host at HousingPad
            </Typography>
          </Box>
          <Stepper activeStep={activeStep} style={{ margin: "30px 0 15px" }} alternativeLabel>
            {labels.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {handleSteps(activeStep)}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default StepForm