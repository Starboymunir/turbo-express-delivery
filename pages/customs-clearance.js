import { Fragment } from "react";
import Head from "next/head";
import generalStyle from "../src/styles/_general";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import IconButton from "@material-ui/core/IconButton";

export default function CustomClearance() {
  const classes = generalStyle();

  return (
    <Fragment>
      <Head>
        <title>Custom Clearance | Turbo Express Delivery</title>
        <meta name="description" key="description" content="Custom Clearance at Turbo Express Delivery" />
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
      </Head>
      <Grid className={classes.mainContainer} container alignItems="center" direction="column">
        <Zoom clear>
          <Typography variant="h3" component="h2" gutterBottom>
            <IconButton>
              <DoneAllIcon className={classes.titleIcon} color="primary" />
            </IconButton>
            Customs Clearance
          </Typography>
        </Zoom>
        <Grid md={8} lg={6} elevation={0} item>
          <Zoom clear>
            <Typography variant="body1" gutterBottom>
              With the current emphasis on complex free trade agreements and global sourcing, customs issues have assumed an increasingly important role in the supply chain. Our global customs services focus on the compliance, release and reporting needs of the marketplace.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Visionary
            </Typography>
            <Typography variant="body1" gutterBottom>
              Turbo Express Cargo has redesigned the industrys "value curve" for customs sourcing. Customs issues have assumed an increasingly important role in the supply chain.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Compliance Driven Processes
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our network operates under standardized processes which are continually validated, measured, analyzed and reviewed. Whether your customs activates are in the U.S. or Mexico, we have mapped and verified a standard process flow.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Data, Not Document
            </Typography>
            <Typography variant="body1" gutterBottom>
              Tired of stacks of documents? Let us move you into a paperless environment.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Ranking
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our network and size have provided us with stature. In the U.S., for example, we rank as the nations fourth largest customs broker, based on entered values reported under our file code.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Expertise
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our combination of product management, field operations and consulting service allow us to provide you the perfect mix of skill sets necessary for complete custom.
            </Typography>
          </Zoom>
        </Grid>
      </Grid>
    </Fragment>
  );
}
