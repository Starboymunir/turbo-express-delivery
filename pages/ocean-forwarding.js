import { Fragment } from "react";
import Head from "next/head";
import generalStyle from "../src/styles/_general";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import IconButton from "@material-ui/core/IconButton";

export default function OceanForwarding() {
  const classes = generalStyle();

  return (
    <Fragment>
      <Head>
        <title>Ocean Forwarding | Turbo Express Delivery</title>
        <meta name="description" key="description" content="Ocean Forwarding at Turbo Express Delivery" />
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
        <meta property="og:image" key="og:image" content="https://www.turboexpressdelivery.com/images/turbo.png"></meta>
        <meta property="og:url" key="og:url" content="www.turboexpressdelivery.com" />
        <link rel="canonical" key="canonical" href="https://www.turboexpressdelivery.com/ocean-forwarding" />
      </Head>
      <Grid className={classes.mainContainer} container alignItems="center" direction="column">
        <Zoom clear>
          <Typography variant="h3" component="h1" gutterBottom>
            <IconButton>
              <DirectionsBoatIcon className={classes.titleIcon} color="primary" />
            </IconButton>{" "}
            Ocean Forwarding
          </Typography>
        </Zoom>

        <Grid md={8} lg={6} elevation={0} item>
          <Zoom clear>
            <Typography variant="body1" gutterBottom>
              Our ocean forwarding program supplies customers with a proven process that helps support productivity , improvements, cost reduction and consistent overseas service.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Experienced Personnel
            </Typography>
            <Typography variant="body1" gutterBottom>
              Thanks to our extensive experience with ocean documentation and shipping, we understand the complexities of shipping globally.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Electronic Capabilities
            </Typography>
            <Typography variant="body1" gutterBottom>
              Multiple EDI documents are electronically sent and received to and from your order/ship/bill (OSB) system including 810 commercial invoice, 856 Pre-Alert and 858 Confirmation.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              In-House Banking
            </Typography>
            <Typography variant="body1" gutterBottom>
              In-house banking is available at some of our locations, providing quicker and more accurate processing for letters of credit.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Pre-Alert Procedures
            </Typography>
            <Typography variant="body1" gutterBottom>
              Pre-alerts are automatically sent to all overseas customers as well as shippers and designated third parties.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Rate Negotiation Quotes
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our focus on rate negotiation involves key contacts with all carriers. Our goal is a four- hour turnaround for all ocean rate quote requests.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Door-to-Door Tracking
            </Typography>
            <Typography variant="body1" gutterBottom>
              All containers, including shipment-in-process communication with the overseas customer are tracked door-to-door.
            </Typography>
          </Zoom>
        </Grid>
      </Grid>
    </Fragment>
  );
}
