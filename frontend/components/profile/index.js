import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
} from '@material-ui/core';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Account = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <Profile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
          </Grid>
            <ProfileDetails />
        </Grid>
      </Container>
    </main>
  );
};

export default Account;
