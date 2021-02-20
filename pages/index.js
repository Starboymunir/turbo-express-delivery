import Head from "next/head";
import { useRouter } from "next/router";
import Link from "../src/Link";
import homeStyle from "../src/styles/_home";
import { useTheme } from "@material-ui/core/styles";
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

export default function Home() {
  const classes = homeStyle();
  const theme = useTheme();
  const router = useRouter();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [trackingNumber, setTrackingNumber] = useState("");

  return (
    <Grid container className={classes.mainConainer} direction="column">
      <Head>
        <title key="title">Home | Turbo Express Delivery</title>
        <meta name="description" key="description" content="Turbo Express Delivery provides global delivery services with top-notch security and efficiency that satisty your needs" />
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
      </Head>

      <Grid item>
        {/* Landing Section */}
        <Grid className={classes.landingSection} container direction="row">
          <Grid sm={12} md={6} item>
            <Paper elevation={0} className={classes.lSDescription}>
              <Zoom clear>
                <Typography className={classes.lSDescription__title} variant="h3" component="h2">
                  Turbo Express Delivery
                </Typography>
                <Typography className={classes.lSDescription__subtitle} variant="h4" component="h3">
                  The world is at your door step
                </Typography>
                <Typography className={classes.lSDescription__description} variant="body1">
                  We provide global delivery services with top-notch security and efficiency that satisfy your needs.
                </Typography>
                <Button elevation={0} className={classes.lSDescription__btn} variant="contained" color="secondary" size="large" component={Link} href="/contact">
                  Get in touch
                </Button>
              </Zoom>
            </Paper>
          </Grid>
          <Grid sm={12} md={6} item>
            <Paper elevation={0} className={classes.lSDescription}>
              <Zoom clear>
                <img className={classes.imageElem} src="/images/turbo.png" alt="Turbo Express Delivery Image" width={715} height={431} />
              </Zoom>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <Grid justify="center" style={{ marginTop: "5rem" }} container item>
        <Zoom clear>
          <Paper className={classes.mainTrack}>
            <Typography variant="h5" gutterBottom>
              Track Item
            </Typography>
            <Typography color="primary" variant="body1" gutterBottom>
              Track shipments by Airway Bill #.
            </Typography>
            <FormControl>
              <InputLabel htmlFor="tracking-landing">Tracking number</InputLabel>
              <Input onChange={e => setTrackingNumber(e.target.value)} id="tracking-landing" aria-describedby="Tracking number" />
            </FormControl>
            <Button onClick={() => router.push(`/tracking/${trackingNumber}`)} variant="outlined" style={{ marginTop: "8px" }} size="large" color="primary">
              Track
            </Button>
          </Paper>
        </Zoom>
      </Grid>

      <Grid className={classes.servicesSection} item>
        {/* Services Section */}
        <Zoom clear>
          <Typography className={classes.servicesTitle} variant="h4" gutterBottom>
            <IconButton className={classes.servicesIcon}>
              <SettingsIcon fontSize="large" color="secondary" />
            </IconButton>
            Our Services
          </Typography>
        </Zoom>

        <Grid container direction="row" className={classes.servicesItem} justify={matchesSM ? "center" : "flex-start"}>
          <Grid item>
            <Paper elevation={0}>
              <Fade right>
                <Typography className={classes.headings} variant="h5" gutterBottom>
                  <IconButton className={classes.servicesIcon}>
                    <LocalShippingIcon color="primary" />
                  </IconButton>
                  Express Services
                </Typography>
                <Typography variant="body1" className={classes.servicesItem__description}>
                  With the current emphasis on complex free trade agreements and global sourcing, customs issues have assumed an increasingly important role in the supply chain. Our global customs services focus on the compliance, release and reporting needs of the marketplace.
                </Typography>
              </Fade>
            </Paper>
          </Grid>
          <Grid item>
            <LightSpeed left>
              <LocalShippingIcon color="primary" style={{ fontSize: 200 }} />
            </LightSpeed>
          </Grid>
        </Grid>

        <Grid container direction="row" className={classes.servicesItem} justify={matchesSM ? "center" : "flex-end"}>
          <Grid item>
            <Paper elevation={0}>
              <Fade left>
                <Typography className={classes.headings} variant="h5" gutterBottom>
                  <IconButton className={classes.servicesIcon}>
                    <FlightTakeoffIcon color="primary" />
                  </IconButton>
                  Air Freight
                </Typography>
                <Typography variant="body1" className={classes.servicesItem__description}>
                  As a global leader in air consolidation and forwarding, we provide customer-specific air freight programs to shippers of all sizes. We understand that air freight is a premium and costly service, so our program focuses on quick transit and constant communication, combined with the ability to seize cost saving opportunities.
                </Typography>
              </Fade>
            </Paper>
          </Grid>
          <Grid item>
            <LightSpeed right>
              <FlightTakeoffIcon color="primary" style={{ fontSize: 200 }} />
            </LightSpeed>
          </Grid>
        </Grid>

        <Grid container direction="row" className={classes.servicesItem} justify={matchesSM ? "center" : "flex-start"}>
          <Grid item>
            <Paper elevation={0}>
              <Fade right>
                <Typography className={classes.headings} variant="h5" gutterBottom>
                  <IconButton className={classes.servicesIcon}>
                    <DirectionsBoatIcon color="primary" />
                  </IconButton>
                  Ocean Services
                </Typography>
                <Typography variant="body1" className={classes.servicesItem__description}>
                  Turbo Express Cargo Ocean (FCO), a licensed NVOCC, is the fastest growing NVO in the U.S. market Our volume contracts with strategic carriers supported by our network of FCO departments provides our customers with both flexible and consistent service.
                </Typography>
              </Fade>
            </Paper>
          </Grid>
          <Grid item>
            <LightSpeed left>
              <DirectionsBoatIcon color="primary" style={{ fontSize: 200 }} />
            </LightSpeed>
          </Grid>
        </Grid>

        <Grid container direction="row" className={classes.servicesItem} justify={matchesSM ? "center" : "flex-end"}>
          <Grid item>
            <Paper elevation={0}>
              <Fade left>
                <Typography className={classes.headings} variant="h5" gutterBottom>
                  <IconButton className={classes.servicesIcon}>
                    <DoneAllIcon color="primary" />
                  </IconButton>
                  Custom Clearance
                </Typography>
                <Typography variant="body1" className={classes.servicesItem__description}>
                  With the current emphasis on complex free trade agreements and global sourcing, customs issues have assumed an increasingly important role in the supply chain. Our global customs services focus on the compliance, release and reporting needs of the marketplace.
                </Typography>
              </Fade>
            </Paper>
          </Grid>
          <Grid item>
            <LightSpeed right>
              <DoneAllIcon color="primary" style={{ fontSize: 200 }} />
            </LightSpeed>
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.featuresSection} item>
        {/* Features Section */}
        <Zoom clear>
          <Typography className={classes.featuresTitle} variant="h4" gutterBottom>
            <IconButton className={classes.servicesIcon}>
              <DetailsIcon fontSize="large" color="secondary" />
            </IconButton>
            Our Features
          </Typography>
        </Zoom>

        <Grid className={classes.featuresItemContainer} justify="space-around" container>
          <Grid sm={6} md={4} className={classes.featuresItem} item>
            <Zoom clear>
              <Typography className={classes.headings} variant="h5" gutterBottom>
                <IconButton className={classes.servicesIcon}>
                  <PeopleIcon color="primary" />
                </IconButton>
                Adept Staffs
              </Typography>
              <Typography variant="body1" className={classes.featuresDescription}>
                With our specialists in international shippiing, we provide you with leading solutions to help your business ship internationally.
              </Typography>
            </Zoom>
          </Grid>

          <Grid sm={6} md={4} className={classes.featuresItem} item>
            <Zoom clear>
              <Typography className={classes.headings} variant="h5" gutterBottom>
                <IconButton className={classes.servicesIcon}>
                  <FileCopyIcon color="primary" />
                </IconButton>
                Student Express
              </Typography>
              <Typography variant="body1" className={classes.featuresDescription}>
                We offer a speciaized student delivery service that makes sending university application documents straightforward.
              </Typography>
            </Zoom>
          </Grid>

          <Grid sm={6} md={4} className={classes.featuresItem} item>
            <Zoom clear>
              <Typography className={classes.headings} variant="h5" gutterBottom>
                <IconButton className={classes.servicesIcon}>
                  <SpeedIcon color="primary" />
                </IconButton>
                Swift Delivery
              </Typography>
              <Typography variant="body1" className={classes.featuresDescription}>
                We prioritise speed and security in our working logistics in an efficient way for our deliveries
              </Typography>
            </Zoom>
          </Grid>

          <Grid sm={6} md={4} className={classes.featuresItem} item>
            <Zoom clear>
              <Typography className={classes.headings} variant="h5" gutterBottom>
                <IconButton className={classes.servicesIcon}>
                  <PublicIcon color="primary" />
                </IconButton>
                Global Reach
              </Typography>
              <Typography variant="body1" className={classes.featuresDescription}>
                Turbo Express worldwide reach extends to over 220 countries and territories, delivering fast transit times, ultimate reliablility and online tracking visibility.
              </Typography>
            </Zoom>
          </Grid>

          <Grid sm={6} md={4} className={classes.featuresItem} item>
            <Zoom clear>
              <Typography className={classes.headings} variant="h5" gutterBottom>
                <IconButton className={classes.servicesIcon}>
                  <SettingsInputAntennaIcon color="primary" />
                </IconButton>
                Global Connectivity
              </Typography>
              <Typography variant="body1" className={classes.featuresDescription}>
                Global connectivity is achieved using commercial airlines and a comprehensive worldwide hub and spoke operation that covers almost every corner of the globe. We organise thousands of shipments on a daily basis using common data/barcode processes and reconciliation of manifests.
              </Typography>
            </Zoom>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
