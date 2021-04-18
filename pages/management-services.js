import { Fragment } from "react";
import Head from "next/head";
import generalStyle from "../src/styles/_general";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import WorkIcon from "@material-ui/icons/Work";
import IconButton from "@material-ui/core/IconButton";

export default function ManagementServices() {
  const classes = generalStyle();

  return (
    <Fragment>
      <Head>
        <title>Management Services | Turbo Express Delivery</title>
        <meta name="description" key="description" content="Management Services at Turbo Express Delivery" />
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
        <meta property="og:image" key="og:image" content="https://www.turboexpressdelivery.com/images/turbo.png"></meta>
        <meta property="og:url" key="og:url" content="www.turboexpressdelivery.com" />
        <link rel="canonical" key="canonical" href="https://www.turboexpressdelivery.com/management-services" />
      </Head>
      <Grid className={classes.mainContainer} container alignItems="center" direction="column">
        <Zoom clear>
          <Typography variant="h3" component="h1" gutterBottom>
            <IconButton>
              <WorkIcon className={classes.titleIcon} color="primary" />
            </IconButton>{" "}
            Management Services
          </Typography>
        </Zoom>

        <Grid md={8} lg={6} elevation={0} item>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Ocean Consolidation
            </Typography>
            <Typography variant="body1" gutterBottom>
              Different products and different selling strategies mean that a generic purchase order tracking system does not work. But, when tied to your Ocean Consolidation service it can create a strategic advantage by giving you the exact status of each purchase order from inception through to delivery. This information can then provide the basis for critical logistics decisions. We understand the importance of this data and have developed a customer specific approach that works because it is designed to your specifications - which we can present in a live demonstration.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Purchase Order Monitoring
            </Typography>
            <Typography variant="body1" gutterBottom>
              From purchase order inception to final delivery, the exact status of each purchase order is visible to you, your buyers and merchants.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Vendor Communication
            </Typography>
            <Typography variant="body1" gutterBottom>
              The availability of each purchase order is monitored based on shipping window dates. We communicate potential delays or exceptions before they occur.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Product Collection and Booking
            </Typography>
            <Typography variant="body1" gutterBottom>
              Cargo is received and booked based on your ocean contract. The system is continuously updated and shipping and receiving reports can be created by buyers, by purchase order, by style or by item.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Commercial Document Collection
            </Typography>
            <Typography variant="body1" gutterBottom>
              The delivery and receipt of commercial documents is closely monitored, providing you with measurement reports on each vendors compliance with on-time document delivery.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Consolidation and Customs Loading
            </Typography>
            <Typography variant="body1" gutterBottom>
              Using your specifications, CFS/CY shipments are received, consolidated and loaded at our facility. A container manifest is then created with 3-D outline of where each purchase order is loaded in each container, providing valuable data for your warehouse, in a highly functional format.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Document Preparation and Distribution
            </Typography>
            <Typography variant="body1" gutterBottom>
              Bill of lading, packing list, commercial invoice and any other documents needed are prepared and distributed by our personnel.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Detailed Information
            </Typography>
            <Typography variant="body1" gutterBottom>
              All the critical information that buyers need - from shipment process detail, down to SKU, size and color level - is in our system and available to you at your desk level PC.
            </Typography>
          </Zoom>
        </Grid>
      </Grid>
    </Fragment>
  );
}
