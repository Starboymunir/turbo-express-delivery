import { Fragment } from "react";
import Head from "next/head";
import generalStyle from "../src/styles/_general";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import FlightIcon from "@material-ui/icons/Flight";
import IconButton from "@material-ui/core/IconButton";

export default function FreightServices() {
  const classes = generalStyle();

  return (
    <Fragment>
      <Head>
        <title>Freight Services | Turbo Express Delivery</title>
        <meta name="description" key="description" content="Freight Services at Turbo Express Delivery" />
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
      </Head>
      <Grid className={classes.mainContainer} container alignItems="center" direction="column">
        <Zoom clear>
          <Typography variant="h3" component="h1" gutterBottom>
            <IconButton>
              <FlightIcon className={classes.titleIcon} color="primary" />
            </IconButton>{" "}
            Freight Services
          </Typography>
        </Zoom>

        <Grid md={8} lg={6} elevation={0} item>
          <Zoom clear>
            <Typography variant="body1" gutterBottom>
              Companies trading in the global market place are challenged to deliver quality products at a lower cost. One of the biggest challenges is identifying the most cost effective time efficient logistics model to trade product across multiple borders and geographic. An opportunity for service performance enhancement exists through our F.C.R.F.S network which covers all phases of ground transportation.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              These programs include:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">Scheduled Services Adding Value</Typography>
              </li>
              <li>
                <Typography variant="body1">Route Optimisation</Typography>
              </li>
              <li>
                <Typography variant="body1">Carrier network Partnerships</Typography>
              </li>
              <li>
                <Typography variant="body1">Time Definite</Typography>
              </li>
              <li>
                <Typography variant="body1">Door to Door Delivery</Typography>
              </li>
            </ul>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Scheduled Services Adding Value
            </Typography>
            <Typography variant="body1" gutterBottom>
              We offer merge and transit services coupled with our scheduled daily services which offer time definite lead times. By understanding our customers needs we can customize specific and flexible supply chain solutions for every customer .ect status of each purchase order is visible to you, your buyers and merchants.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Route Optimisation
            </Typography>
            <Typography variant="body1" gutterBottom>
              A unique business model where Turbo Express Cargo will manage your cargo the most cost effective, time efficient method. The transport management program is measurable, accountable and multi-modal and above all easy to use. The program specifically optimizes total cost end to end.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Carrier Network Partnerships
            </Typography>
            <Typography variant="body1" gutterBottom>
              No ground shipment is too large or small. Turbo Express Cargo has carefully selected and approved premium road carriers contracted to serve and support moving your products through different borders.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Time Definite
            </Typography>
            <Typography variant="body1" gutterBottom>
              Non-mode specific, you determine what transit and delivery is required. Turbo Express Cargo manage the mode of transport to ensure your commit date to your customer is achieved.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Door-to-Door Delivery
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our network is seamless, one office, one system, one process. Each office location will support routing your ground transportation cargo needs door to door offering visibility based on core events and customer references.
            </Typography>
          </Zoom>
        </Grid>
      </Grid>
    </Fragment>
  );
}
