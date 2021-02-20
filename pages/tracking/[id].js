import Axios from "axios";
import { Fragment } from "react";
import Head from "next/head";
import generalStyle from "../../src/styles/_general";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";

export default function Tracking({ order }) {
  const classes = generalStyle();

  return (
    <Fragment>
      <Head>
        <title>{order.number} | Turbo Express Delivery</title>
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
      </Head>
      <Grid className={classes.mainContainer} container alignItems="center" direction="column">
        <Zoom clear>
          <Typography variant="h4" className={classes.mb3} gutterBottom>
            {`Shipment Details For Tracking Number ${order.number}`}
          </Typography>
        </Zoom>
        <Grid justify="space-around" container item>
          <Grid className={classes.mb3} item xs={12} md={5}>
            <Zoom clear>
              <Typography variant="h5" gutterBottom>
                From:
              </Typography>
              <Typography variant="body1" gutterBottom>
                Sender Phone Number: <span className={`${classes.bgPrimary} ${classes.textWhite} ${classes.px1} ${classes.py0}`}>{order.senderPhone}</span>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Sender Email Address: <span className={`${classes.bgPrimary} ${classes.textWhite} ${classes.px1} ${classes.py0}`}>{order.senderEmail}</span>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Sender Location: <span className={`${classes.bgPrimary} ${classes.textWhite} ${classes.px1} ${classes.py0}`}>{order.senderLocation}</span>
              </Typography>
            </Zoom>
          </Grid>
          <Grid className={classes.mb3} item xs={12} md={5}>
            <Zoom clear>
              <Typography variant="h5" gutterBottom>
                To:
              </Typography>
              <Typography variant="body1" gutterBottom>
                Receiver Phone Number: <span className={`${classes.bgPrimary} ${classes.textWhite} ${classes.px1} ${classes.py0}`}>{order.receiverPhone}</span>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Receiver Email Address: <span className={`${classes.bgPrimary} ${classes.textWhite} ${classes.px1} ${classes.py0}`}>{order.receiverEmail}</span>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Receiver Location: <span className={`${classes.bgPrimary} ${classes.textWhite} ${classes.px1} ${classes.py0}`}>{order.receiverLocation}</span>
              </Typography>
            </Zoom>
          </Grid>
          <Grid className={classes.mb3} item xs={12} md={5}>
            <Zoom clear>
              <Typography variant="h5" gutterBottom>
                Shipment Information
              </Typography>
              <Typography variant="body1" gutterBottom>
                Shipment Destination: <span className={`${classes.bgPrimary} ${classes.textWhite} ${classes.px1} ${classes.py0}`}>{order.shipmentDestination}</span>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Ship Date: <span className={`${classes.bgPrimary} ${classes.textWhite} ${classes.px1} ${classes.py0}`}>{order.shipDate}</span>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Receiver Location: <span className={`${classes.bgPrimary} ${classes.textWhite} ${classes.px1} ${classes.py0}`}>{order.receiverLocation}</span>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Expected Date: <span className={`${classes.bgPrimary} ${classes.textWhite} ${classes.px1} ${classes.py0}`}>{order.expectedDate}</span>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Description: <span className={`${classes.bgPrimary} ${classes.textWhite} ${classes.px1} ${classes.py0}`}>{order.description}</span>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Current Location: <span className={`${classes.bgPrimary} ${classes.textWhite} ${classes.px1} ${classes.py0}`}>{order.currentLocation}</span>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Current Status: <span className={`${classes.bgPrimary} ${classes.textWhite} ${classes.px1} ${classes.py0}`}>{order.currentStatus}</span>
              </Typography>
            </Zoom>
          </Grid>
          <Grid className={classes.mb3} item xs={12} md={5}>
            <Zoom clear>
              <Typography variant="h5" gutterBottom>
                Shipment Location History
              </Typography>
              <Typography variant="body1" gutterBottom>
                First Stop: <span className={`${classes.bgPrimary} ${classes.textWhite} ${classes.px1} ${classes.py0}`}>{order.firstStop}</span>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Second Stop: <span className={`${classes.bgPrimary} ${classes.textWhite} ${classes.px1} ${classes.py0}`}>{order.secondStop}</span>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Third Stop: <span className={`${classes.bgPrimary} ${classes.textWhite} ${classes.px1} ${classes.py0}`}>{order.thirdStop}</span>
              </Typography>
            </Zoom>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const response = await Axios.get("http://localhost:8080/allItems");
  const orders = response.data;
  const paths = orders.map(order => `/tracking/${order.number}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await Axios.post(`http://localhost:8080/fetchOrder`, { number: params.id });
  const order = response.data;
  return { props: { order } };
}
