import React, { PropTypes } from 'react';
import StepForm from './VerticalLinear';
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Paper from "@material-ui/core/Paper"
import Link from "@material-ui/core/Link"
import IconButton from "@material-ui/core/IconButton"
import SvgIcon from "@material-ui/core/SvgIcon"
import Typography from "@material-ui/core/Typography"
import CssBaseline from "@material-ui/core/CssBaseline"

// const styles ={
//   paddingTop: "70px",
//   height: "100vh",
//   width: "100vw",
//   backgroundColor: "white",
//   leftSide: {
//   },
//   rightSide: {

//   },
// }

const useStyles = makeStyles(theme => ({
    appBar: {
      position: "relative",
      paddingRight: 10,
      paddingLeft: 10
    },
    svg: {
      verticalAlign: "middle"
    },
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        padding: theme.spacing(3)
      }
    }
}))


const BecomeAHost = () => {
    const classes = useStyles()
    return(
        <div>
            <CssBaseline />
           
            <main className={classes.layout}>
                <Paper className={classes.paper}>
            
                    <StepForm />
                </Paper>
            </main>  
         
        </div>
    )
}

    

export default BecomeAHost;