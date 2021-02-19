import { Fragment } from "react";
import Head from "next/head";
import generalStyle from "../src/styles/_general";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import IconButton from "@material-ui/core/IconButton";

export default function OceanServices() {
  const classes = generalStyle();

  return (
    <Fragment>
      <Head>
        <title>Ocean Services | Turbo Express Delivery</title>
        <meta name="description" key="description" content="Ocean Services at Turbo Express Delivery" />
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
      </Head>
      <Grid className={classes.mainContainer} container alignItems="center" direction="column">
        <Zoom clear>
          <Typography variant="h3" component="h2" gutterBottom>
            <IconButton>
              <DirectionsBoatIcon className={classes.titleIcon} color="primary" />
            </IconButton>{" "}
            Ocean Services
          </Typography>
        </Zoom>

        <Grid md={8} lg={6} elevation={0} item>
          <Zoom clear>
            <Typography variant="body1" gutterBottom>
              Turbo Express Cargo Ocean (FCO), a licensed NVOCC, is the fastest growing NVO in the U.S. market Our volume contracts with strategic carriers supported by our network of FCO departments provides our customers with both flexible and consistent service. Among the benefits of using FCO:
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Flexible Schedules
            </Typography>
            <Typography variant="body1" gutterBottom>
              By contracting with multiple carriers and working with all carriers, we can accommodate the requirements of virtually any schedule. With multiple sailings per week and a variety of quality carrier options, consistent flexibility is our goal.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Fast Transit Door-to-Door
            </Typography>
            <Typography variant="body1" gutterBottom>
              Quick transit time is a key issue when negotiation contracts with carriers. When added to late closeout for delivery at origin and next day availability at destination, the result is minimal door-to-door transit time.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Competitive Pricing
            </Typography>
            <Typography variant="body1" gutterBottom>
              As one of the largest NVOCCs, we enjoy leveraged pricing with many carriers. The leverage means you will get the best value.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Global Coverage
            </Typography>
            <Typography variant="body1" gutterBottom>
              With FCO offices in over 2 countries, we offer you single-source ocean capabilities. From anywhere to anywhere, we keep you informed of your cargo status and of potential options with a focus on cost savings and continuous transit improvement.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Vendor Consolidation and LCL Services
            </Typography>
            <Typography variant="body1" gutterBottom>
              Multi-vendor and multi-country consolidation services, together with our own warehouses to collect and merge shipments, provide the opportunity for improved economics. FCO also provides scheduled less than container load (LCL) services from most origins in the world, using the same quality carriers as our full container load (FCL) program. Deconsolidation and final delivery to your door is handled by our gateway destination offices.
            </Typography>
          </Zoom>
        </Grid>
      </Grid>
    </Fragment>
  );
}
