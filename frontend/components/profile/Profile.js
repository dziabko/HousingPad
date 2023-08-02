import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from "@material-ui/core/styles";
import {getCurrentUser} from '../../util/home_api_utli';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from '@material-ui/core';


const user = {
  avatar: '/static/images/avatars/avatar_6.png',
};

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));


const Profile = ({ className, ...rest }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const fetchUser = () => {

    getCurrentUser().then(response => {
      console.log(response);
      setFirstName(response.first_name);
      setLastName(response.last_name);
    })
  }

  const classes = useStyles();

  useEffect(() => {
    fetchUser();
  })



  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {`${firstName} ${lastName}`}
          </Typography>
       
         
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
