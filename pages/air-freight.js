import { Fragment } from "react";
import Head from "next/head";
import generalStyle from "../src/styles/_general";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import FlightIcon from "@material-ui/icons/Flight";
import IconButton from "@material-ui/core/IconButton";

export default function CargoServices() {
  const classes = generalStyle();

  return (
    <Fragment>
      <Head>
        <title>Air Freight | Turbo Express Delivery</title>
        <meta name="description" key="description" content="Air Freight at Turbo Express Delivery" />
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
      </Head>
      <Grid className={classes.mainContainer} container alignItems="center" direction="column">
        <Zoom clear>
          <Typography variant="h3" component="h2" gutterBottom>
            <IconButton>
              <FlightIcon className={classes.titleIcon} color="primary" />
            </IconButton>{" "}
            Air Freight
          </Typography>
        </Zoom>

        <Grid md={8} lg={6} elevation={0} item>
          <Zoom clear>
            <Typography variant="body1" gutterBottom>
              As a global leader in air consolidation and forwarding, we provide customer-specific air freight programs to shippers of all sizes. We understand that air freight is a premium and costly service, so our program focuses on quick transit and constant communication, combined with the ability to seize cost saving opportunities. Some of the benefits include:
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Key Carrier Partnerships
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our company partners with key carriers that offer the most consistent transit and largest lift. Because we contract with these carriers, we gain leverage in both space allocation and pricing.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Flexibility
            </Typography>
            <Typography variant="body1" gutterBottom>
              To offer the most direct, economical routing of your cargo, we contract with multiple carriers, allowing us to create the greatest possible flexibility in routing and pricing.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Competitive Pricing
            </Typography>
            <Typography variant="body1" gutterBottom>
              Because of our leverage with carriers, we can be price competitive without losing focus on the most important aspect of air shipping: on time delivery, door-to-door.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Measured Cycle Times
            </Typography>
            <Typography variant="body1" gutterBottom>
              Every shipment, with every carrier, is measured. We partner with the carriers to ensure that our high standards of on time delivery are met. And, we include our customers in this process by reporting our true cycle times.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              EDI with Air Carriers
            </Typography>
            <Typography variant="body1" gutterBottom>
              Electronic communication links us with all major carriers, providing real-time information of shipment status to you and to our specialists.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Door-to-Door Tracking
            </Typography>
            <Typography variant="body1" gutterBottom>
              You can dial in to track your shipment, receive a daily status report, or allow our office to call you with the status of each order.
            </Typography>
          </Zoom>
        </Grid>
      </Grid>
    </Fragment>
  );
}
