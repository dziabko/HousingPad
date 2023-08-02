import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import fetchUser from '../../util/user_api_util';
import {updateUser} from '../../util/user_api_util';
import {getCurrentUser} from '../../util/home_api_utli';
import {fetchReservationOfUser} from '../../util/reservation_api_util';
import Typography from "@material-ui/core/Typography"

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from '@material-ui/core';


const useStyles = makeStyles(() => ({
  root: {}
}));

const ProfileDetails = ({ className, ...rest }) => {
  const [count, setCount] = useState(0);
  const [reservation, setReservation] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  const fetchUser = () => {

    getCurrentUser().then(response => {
      console.log(response);
      setFirstName(response.first_name);
      setLastName(response.last_name);
      setEmail(response.email);
      setId(response.id);

      fetchReservationOfUser(response.id).then(res => {
        console.log(res);
        setReservation(res)

      })
    })

  }

  const classes = useStyles();

  useEffect(() => {
    if(count == 0){
      fetchUser();
    }
  }, [])

  const handleChange = (event) => {
    setFirstName(event.target.value);

  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);

  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);

  };
  const handleSubmit = () => {
    console.log(firstName);
    const User = {
      id: id,
      first_name: firstName,
      last_name: lastName,
      email: email
    }
    updateUser(User);
    window.location.reload(false);
  }
  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
      <CardHeader
          subheader="If you wish to edit reservations please go visit reservations tab"
          title="Reservations"
        />
         <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <div>
            { reservation.map( (data, index) => (
              <div key={index}>
                <CardContent>
                  <Typography color="textSecondary">
                    {(reservation.length === 1) ? 'You have a single Reservation': `You have ${reservation.length} Reservations`}
                  </Typography>
                  <Typography color="textSecondary">
                    Check-in date is: {data.check_in_date}
                  </Typography>
                  <Typography color="textSecondary">
                    Check out date is: {data.check_out_date}
                  </Typography>
                </CardContent>
              </div>
              ))
            }
            </div>
        
          </Grid>
        </CardContent>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleLastNameChange}
                required
                value={lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleEmailChange}
                required
                value={email}
                variant="outlined"
              />
            </Grid>
           
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleSubmit}>
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
