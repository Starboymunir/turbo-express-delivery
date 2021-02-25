import { Fragment } from "react";
import Head from "next/head";
import generalStyle from "../src/styles/_general";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import IconButton from "@material-ui/core/IconButton";

export default function ExpressServices() {
  const classes = generalStyle();

  return (
    <Fragment>
      <Head>
        <title>Express Services | Turbo Express Delivery</title>
        <meta name="description" key="description" content="Express Services at Turbo Express Delivery" />
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
      </Head>
      <Grid className={classes.mainContainer} container alignItems="center" direction="column">
        <Zoom clear>
          <Typography variant="h3" component="h1" gutterBottom>
            <IconButton>
              <LocalShippingIcon className={classes.titleIcon} color="primary" />
            </IconButton>{" "}
            Express Services
          </Typography>
        </Zoom>

        <Grid md={8} lg={6} elevation={0} item>
          <Zoom clear>
            <Typography variant="body1" gutterBottom>
              The world is at your doorstep with Turbo express. By using the most comprehensive flight schedules available, one of the largest networks in the world and the best rates, our express services will do the job for you. Delivery of documents, parcels, samples, gifts and more, anywhere in the world is our defining service.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Import Services
            </Typography>
            <Typography variant="body1" gutterBottom>
              If you have a need to import goods or documents from anywhere in the world, call our Import Team now on phone number or email us on email. We will handle all custom related issues for you quickly, arrange collections from anywhere in the world, carnet, and deliver straight to your door or any other location of your specification. From straightforward document imports to complex Inward Processing Relief, and other more complex imports, you can benefit from our knowledge and rest assured that it’s all being done by experienced personnel.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Export Services
            </Typography>
            <Typography variant="body1" gutterBottom>
              When exporting, do not trouble yourself with custom agents, or flight schedules, because when Turbo Express is taking care of things all you need to do is sit back and watch your exports reach its destination. Turbo Express has geared its operations for efficient deliveries world wide, and our focus is to have our customers benefit from our timely services and logistics support. Export and import services are provided through both sea and air.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Cargo Services
            </Typography>
            <Typography variant="body1" gutterBottom>
              Turbo Express also takes care of heavy shipments and large cargo requiring special handling. We accept all commercial cargo and other cargo requiring special handling (such as dangerous goods). As an IATA CARGO AGENT, we issue Air Waybill, by ourselves. Any modes of special transportation such as consolidated cargo or ATA carnet transportation are available according to your needs.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Third Party Pickups
            </Typography>
            <Typography variant="body1" gutterBottom>
              Business convenience is at its best. If you wish Turbo Express to pick up any shipment from any country in the world and dispatch it to another country, and bill all charges to you anywhere, we can do it. No need to speak to agents from some other country and no need to speak with customs, just let Turbo Express show you how our global network works for you.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              World Wide Pickups
            </Typography>
            <Typography variant="body1" gutterBottom>
              Turbo Express can become your trusted partner when it comes to picking up your goods and items from anywhere in the world and have them delivered to you. It’s simply a matter of taking advantage of the Turbo Express global network. With offices in over 240 locations around the world you can be sure that Turbo Express will look after your goods from the point of pick up to the point of delivery.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Warehousing
            </Typography>
            <Typography variant="body1" gutterBottom>
              Business activities change all the time, keeping customers satisfied requires continuous quality checks, and back up plans need to be on hand in any situation. While sending shipments a client may ask us to deliver part of a shipment and hold on to the remaining. Turbo Express provides warehousing facilities for exactly such purposes in most areas of the world, to accommodate your shipments. You can rest with ease that your shipments are in safe hands.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Attestation
            </Typography>
            <Typography variant="body1" gutterBottom>
              If you need to have documents attested by educational, government bodies, or other institutions in foreign countries do not worry about how to get them there, talk to us. Turbo Express will provide you the service of having your documents attested from anywhere in the world, and delivered back to your doorstep. And you can always keep track of your documents, no matter where they are.
            </Typography>
          </Zoom>
        </Grid>
      </Grid>
    </Fragment>
  );
}
