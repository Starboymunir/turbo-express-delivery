import Head from "next/head";
import { useRouter } from "next/router";
import Link from "../src/Link";
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButton from "@material-ui/core/IconButton";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DetailsIcon from "@material-ui/icons/Details";
import PeopleIcon from "@material-ui/icons/People";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import SpeedIcon from "@material-ui/icons/Speed";
import PublicIcon from "@material-ui/icons/Public";
import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import LightSpeed from "react-reveal/LightSpeed";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { useState } from "react";

const useStyles = makeStyles(theme =>
  createStyles({
    mainConainer: {
      marginTop: theme.mixins.toolbar.minHeight
    },
    headings: {
      [theme.breakpoints.down("xs")]: {
        textAlign: "center"
      }
    },
    landingSection: {
      width: "100%",
      minHeight: "90vh",
      background: "url('/images/backgroundImg.jpg') top center no-repeat",
      backgroundSize: "cover"
    },
    lSDescription: {
      height: "100%",
      display: "flex",
      margin: "0 auto",
      maxWidth: "40rem",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(3),
        textAlign: "center"
      },
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(3, 10)
      },
      backgroundColor: "transparent"
    },
    lSDescription__title: {
      zIndex: "10",
      marginBottom: theme.spacing(2),
      fontSize: "2.7rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.3rem"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "2.125rem"
      }
    },
    lSDescription__subtitle: {
      zIndex: "10",
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.725rem"
      }
    },
    lSDescription__description: {
      zIndex: "1000",
      marginBottom: theme.spacing(2)
    },
    lSDescription__btn: {
      [theme.breakpoints.down("sm")]: {
        margin: "0 auto"
      },
      color: theme.palette.common.white,
      maxWidth: "200px"
    },
    lSImage: {
      zIndex: "0"
    },
    servicesSection: {
      padding: theme.spacing(10, 0)
    },
    servicesTitle: {
      textAlign: "center"
    },
    servicesIcon: {
      paddingTop: "6px"
    },
    servicesItem: {
      padding: theme.spacing(3),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(3, 10)
      }
    },
    servicesItem__description: {
      maxWidth: "25rem",
      paddingRight: theme.spacing(3)
    },
    featuresSection: {
      padding: theme.spacing(10, 0),
      background: "url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60') top center no-repeat",
      backgroundSize: "cover"
    },
    featuresItemContainer: {
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(0, 5)
      }
    },
    featuresItem: {
      padding: theme.spacing(0, 3),
      marginBottom: theme.spacing(5)
    },
    featuresDescription: {
      maxWidth: "25rem"
    },
    featuresTitle: {
      textAlign: "center",
      marginBottom: theme.spacing(5)
    },
    imageElem: {
      maxWidth: "100%",
      height: "auto"
    },
    mainTrack: {
      padding: theme.spacing(3),
      backgroundColor: "#edeef0"
    }
  })
);

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [trackingNumber, setTrackingNumber] = useState("");

  return (
    <Grid container className={classes.mainConainer} direction="column">
      <Head>
        <title key="title">Home | Turbo Express Delivery</title>
        <meta name="description" key="description" content="Turbo Express Delivery provides global delivery services with top-notch security and efficiency that satisty your needs." />
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
        <meta property="og:image" key="og:image" content="https://www.turboexpressdelivery.com/images/turbo.png"></meta>
        <meta property="og:url" key="og:url" content="www.turboexpressdelivery.com" />
        <link rel="canonical" key="canonical" href="https://www.turboexpressdelivery.com" />
      </Head>

      <Grid item></Grid>
    </Grid>
  );
}
