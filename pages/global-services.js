import { Fragment } from "react";
import Head from "next/head";
import generalStyle from "../src/styles/_general";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import PublicIcon from "@material-ui/icons/Public";
import IconButton from "@material-ui/core/IconButton";

export default function GlobalServices() {
  const classes = generalStyle();

  return (
    <Fragment>
      <Head>
        <title>Global Services | Turbo Express Delivery</title>
        <meta name="description" key="description" content="Global Services at Turbo Express Delivery" />
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
      </Head>
      <Grid className={classes.mainContainer} container alignItems="center" direction="column">
        <Zoom clear>
          <Typography variant="h3" component="h1" gutterBottom>
            <IconButton>
              <PublicIcon className={classes.titleIcon} color="primary" />
            </IconButton>{" "}
            Global Services
          </Typography>
        </Zoom>

        <Grid md={8} lg={6} elevation={0} item>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Worldwide Express Document Service
            </Typography>
            <Typography variant="body1" gutterBottom>
              The fastest way to send a document. Turbo Express Worldwide Express Document Service provides desk to desk, urgent and confidential worldwide delivery to over 200 destinations for items such as business correspondence, contracts and tenders.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Turbo Express Worldwide Express Document Service is for items without commercial value and therefore do not require a commercial invoice.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Worldwide Express Parcel Service
            </Typography>
            <Typography variant="body1" gutterBottom>
              Makes sending parcels easy. Turbo Express Worldwide Express Parcel Service provides door to door delivery of all your urgent customs cleared. Sensitive Parcel Shipments, such as, samples, spare parts and fabric swatches.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Turbo Express Worldwide Express Parcel Service is for items that have a commercial value and require a commercial invoice to accompany these shipments.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Turbo Express Super Box Service
            </Typography>
            <Typography variant="body1" gutterBottom>
              The box that gives you speed and economy. The Turbo Express Worldwide Super Box service enables you to send heavier items to selected worldwide destinations at economical rates and still enjoy a fast, efficient service. Super Boxes are available in 10kg and 25kg sizes.
            </Typography>
            <Typography variant="body1" gutterBottom>
              The Turbo Express Super 10KG and Super 25KG box must be used for your shipment in order for you to enjoy the cost effective rates published in this tariff.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Complete the Turbo Express consignment note and mark the service option of either Super 10KG or Super 25KG and attach with each box. Please note that each Super box being sent must be accompanied by its own consignment note regardless of how many boxes to the same receiver. When sending declarable items in a Super Box remember to include a commercial invoice.
            </Typography>
            <Typography variant="body1" gutterBottom>
              The Turbo Express Super Boxes have been designed for maximum strength based on maximum weights. The maximum weight for the Super 10 is 20kg and the Super 25 is 30kg. Weights should be divided into multiple boxes to avoid exceeding the maximum weight per box.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Whilst the Super Boxes are designed for maximum strength we recommend that you maintain original packaging of fragile items where manufacturer packaging is provided to avoid sudden shock damage.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Express Freight
            </Typography>
            <Typography variant="body1" gutterBottom>
              The heavy weight service that not heavy on your pocket. When cost is of paramount importance, use our Express Freight Service. Your heavy weight Airfreight shipment will be handled with the same care, door-to-door with time to spare.
            </Typography>
            <Typography variant="body1" gutterBottom>
              The Turbo Express Freight Service must be booked and confirmed in advance of pickup.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Complete the Turbo Express consignment note, mark the service option for other and type the words Express Freight. Complete a commercial invoice in accordance with Turbo Express user guide.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Before pickup please ensure that the freight consignment is properly packed and labeled in accordance with the Turbo Express user guide. Please ensure pallets are used when sending multiple box consignments to the same address.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Import Express
            </Typography>
            <Typography variant="body1" gutterBottom>
              The Turbo Express Worldwide Import Express Service is available from selected countries. Import Express puts you in control for collection of your urgent documents and parcels right back to your location. Its fast, secure and economical.
            </Typography>
            <Typography variant="body1" gutterBottom>
              The Turbo Express Worldwide Import Express Service can be booked through your local office. Please contact our local Customer Service team for more information or to make collection arrangements.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Charges Collect Express
            </Typography>
            <Typography variant="body1" gutterBottom>
              The Turbo Express charges collect express services is available to Turbo Express account customers. This service enables the sending account customer to opt for the service charges to be paid upon delivery by the consignee.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Please note the restrictions of this service.
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">Available to Turbo Express account customers only.</Typography>
              </li>
              <li>
                <Typography variant="body1">Service is available to selected destinations which can be checked with our local customer service teams.</Typography>
              </li>
              <li>
                <Typography variant="body1">The shipper must provide a full permanent address, contact name and telephone number of the consignee.</Typography>
              </li>
              <li>
                <Typography variant="body1">If the consignee refuses to pay all charges including any duty tax will be charged to the shipper account.</Typography>
                <Typography variant="body1"></Typography>
              </li>
              <li>
                <Typography variant="body1">For more information, contact our customer service team.</Typography>
              </li>
            </ul>
          </Zoom>
        </Grid>
      </Grid>
    </Fragment>
  );
}
