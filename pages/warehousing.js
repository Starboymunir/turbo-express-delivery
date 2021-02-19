import { Fragment } from "react";
import Head from "next/head";
import generalStyle from "../src/styles/_general";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import StorageIcon from "@material-ui/icons/Storage";
import IconButton from "@material-ui/core/IconButton";

export default function Warehousing() {
  const classes = generalStyle();

  return (
    <Fragment>
      <Head>
        <title>Warehousing | Turbo Express Delivery</title>
        <meta name="description" key="description" content="Warehousing at Turbo Express Delivery" />
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
      </Head>
      <Grid className={classes.mainContainer} container alignItems="center" direction="column">
        <Zoom clear>
          <Typography variant="h3" component="h2" gutterBottom>
            <IconButton>
              <StorageIcon className={classes.titleIcon} color="primary" />
            </IconButton>{" "}
            Warehousing
          </Typography>
        </Zoom>

        <Grid md={8} lg={6} elevation={0} item>
          <Zoom clear>
            <Typography variant="body1" gutterBottom>
              We provide a comprehensive, flexible spectrum of distribution services customized to your specific needs that are available throughout our global network. Leading edge systems and EDI connectivity offer you real time visibility to inventory and the capability to process orders remotely. The combination of coverage and technology fives you seamless control over your global supply chain.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Services
            </Typography>
            <Typography variant="body1" gutterBottom>
              In addition to traditional distribution center management, we offer a full range of distribution services including:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">Export consolidation services</Typography>
              </li>
              <li>
                <Typography variant="body1">Remote spare parts distribution</Typography>
              </li>
              <li>
                <Typography variant="body1">Finished goods</Typography>
              </li>
              <li>
                <Typography variant="body1">Import breakbulk and reshiop</Typography>
              </li>
              <li>
                <Typography variant="body1">Return programs</Typography>
              </li>
              <li>
                <Typography variant="body1">Raw materials</Typography>
              </li>
              <li>
                <Typography variant="body1">Product merge</Typography>
              </li>
              <li>
                <Typography variant="body1">In-transit assembly</Typography>
              </li>
              <li>
                <Typography variant="body1">Supplier hub</Typography>
              </li>
            </ul>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Location and Size
            </Typography>
            <Typography variant="body1" gutterBottom>
              You can choose from over 100 global location s for the best solution to fulfill your needs, and the needs of your customers. Our access to facilities within many markets provides flexibility for expansion or restructuring with limited capital investment on your part.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Professional Management
            </Typography>
            <Typography variant="body1" gutterBottom>
              We provide local expertise capable of managing even the most complicated distribution models. Our commitment to training, and use of standard leading-edge processes, guarantees your business objectives are met.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Systems
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our distribution management system (FCMS) are developed and maintained by our own personnel, allowing, continual enhancement and customization of application to fit your specific needs. Lot of number, serial number, and real time internet inventory visibility are some of the innovations that add value.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Security
            </Typography>
            <Typography variant="body1" gutterBottom>
              Your inventory is secure with us. All of our locations practice proven loss prevention disciplines. Security controls, including surveillance cameras, ensure inventory shrinkage is avoided.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Total Logistics Solutions
            </Typography>
            <Typography variant="body1" gutterBottom>
              Combined with our air, ocean and brokerage services, our distribution capabilities provide global seamless logistics solutions that are second-to-one.
            </Typography>
          </Zoom>
        </Grid>
      </Grid>
    </Fragment>
  );
}
