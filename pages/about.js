import { Fragment } from "react";
import Head from "next/head";
import generalStyle from "../src/styles/_general";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";

export default function About() {
  const classes = generalStyle();

  return (
    <Fragment>
      <Head>
        <title>About | Turbo Express Delivery</title>
        <meta name="description" key="description" content="About Turbo Express Delivery" />
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
      </Head>
      <Grid className={classes.mainContainer} container alignItems="center" direction="column">
        <Zoom clear>
          <Typography variant="h3" component="h2" gutterBottom>
            <IconButton>
              <InfoIcon className={classes.titleIcon} color="primary" />
            </IconButton>
            Company Profile
          </Typography>
        </Zoom>
        <Grid md={8} lg={6} elevation={0} item>
          <Zoom clear>
            <Typography variant="body1" gutterBottom>
              The Gateway to all your Courier, Freight and Logistics requirements worldwide. Turbo Express Delivery worldwide has been established to be a worldwide dedicated wholesale courier, freight and logistic service provider. Turbo Express Delivery worldwide was incorporated from a wealth of experience that came from operating successful regional service oriented businesses.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={classes.mt3} variant="body1" gutterBottom>
              Incorporated in 2009, Turbo Express worldwide has grown to be an established Courier, Freight and Logistics service provider managed and driven by a dedicated team of professionals backed with years of experience in the Industry. From its humble beginnings, Turbo Express has expanded over the years and currently provides services Worldwide, International Operations Center and Hub at the Dubai Cargo Village and its corporate office located in the heart of Dubai City. Turbo Express worldwide brings you worldwide connectivity from its regional hub in Dubai.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={classes.mt3} variant="body1" gutterBottom>
              Turbo Express is a considerable global and local experience has merged perfectly with our resources - human, technical and operational, to provide a seamless and professional service, which we present to you within a well structured and cost effective menu. Turbo Express provides services to a wide range of clientele that benefit from our own far-reaching global networks. Strategic alliances with carefully selected service providers empowers Turbo Express with comprehensive coverage.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={classes.mt3} variant="body1" gutterBottom>
              With Turbo Express, you receive access to exhaustive resources - on par with industry leaders. The wide range of Turbo Express services is well supported by more than 500 dedicated professionals and a fleet of more than 300 vehicles. The phenomenal growth and success ofTurboo Express worldwide is a result of its proven consistency in delivering its promises, supported by solid financial and human resources.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={classes.mt3} variant="body1" gutterBottom>
              Turbo Express continues to be the vital link that connects Europe, United States of America and Africa with the Asian Sub-Continent.
            </Typography>
          </Zoom>
        </Grid>
      </Grid>
    </Fragment>
  );
}
