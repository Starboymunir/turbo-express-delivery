import { Fragment } from "react";
import Head from "next/head";
import generalStyle from "../src/styles/_general";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import CallIcon from "@material-ui/icons/Call";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";

export default function Contact() {
  const classes = generalStyle();

  return (
    <Fragment>
      <Head>
        <title>Contact | Turbo Express Delivery</title>
        <meta name="description" key="description" content="Contact Turbo Express Delivery" />
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
      </Head>
      <Grid className={classes.mainContainer} container alignItems="center" direction="column">
        <Zoom clear>
          <Typography variant="h3" component="h2" gutterBottom>
            <IconButton>
              <ContactMailIcon className={classes.titleIcon} color="primary" />
            </IconButton>{" "}
            Get in Touch
          </Typography>
        </Zoom>

        <Grid justify="space-around" container item>
          <Grid xs={12} sm={6} md={4} item>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Head Office
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a href="tel:+1 425 643-8199">(425) 643-8199</a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              15831 SE 47th St
            </Typography>
            <Typography variant="body1" gutterBottom>
              Bellevue, Washington(WA), 98006
            </Typography>
          </Grid>

          <Grid xs={12} sm={6} md={4} item>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Massachusetts Branch
            </Typography>
            <Typography variant="body1" gutterBottom>
              3111 Massachusetts Avenue
            </Typography>
            <Typography variant="body1" gutterBottom>
              Washington, Washington DC
            </Typography>
          </Grid>

          <Grid xs={12} sm={6} md={4} item>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              <IconButton>
                <CallIcon color="secondary" />
              </IconButton>
              <a href="tel:+1 706 666-2297">(706) 666-2297</a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <IconButton>
                <EmailIcon color="secondary" />
              </IconButton>
              <a href="mailto:info@turboexpressdelivery.com">info@turboexpressdelivery.com</a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
