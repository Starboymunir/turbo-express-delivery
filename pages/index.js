import Head from "next/head";
import Image from "next/image";
import Link from "../src/Link";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme =>
  createStyles({
    mainConainer: {
      marginTop: theme.mixins.toolbar.minHeight
    },
    landingSection: {
      minHeight: "90vh"
    },
    lSDescription: {
      height: "100%",
      display: "flex",
      margin: "0 auto",
      maxWidth: "40rem",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(3),
        textAlign: "center"
      },
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(3, 10)
      }
    },
    lSDescription__title: {
      zIndex: "10",
      marginBottom: theme.spacing(2),
      fontSize: "2.7rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.3rem"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "2.125rem"
      }
    },
    lSDescription__subtitle: {
      zIndex: "10",
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.725rem"
      }
    },
    lSDescription__description: {
      zIndex: "1000",
      marginBottom: theme.spacing(2)
    },
    lSDescription__btn: {
      [theme.breakpoints.down("sm")]: {
        margin: "0 auto"
      },
      color: theme.palette.common.white,
      maxWidth: "200px"
    },
    lSImage: {
      zIndex: "0"
    },
    servicesSection: {
      paddingTop: theme.spacing(10)
    },
    servicesTitle: {
      textAlign: "center"
    },
    servicesIcon: {
      paddingTop: "6px"
    }
  })
);

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.mainConainer} direction="column">
      <Head>
        <title key="title">Home | Turbo Express Delivery</title>
        <meta name="description" key="description" content="Turbo Express Delivery provides global delivery services with top-notch security and efficiency that satisty your needs" />
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
      </Head>
      <Grid item>
        {/* Landing Section */}
        <Image className={classes.lSImage} src="/images/backgroundImg.jpg" alt="Drone background image" objectFit="cover" objectPosition="100% center" layout="fill" />
        <Grid className={classes.landingSection} container direction="row">
          <Grid sm={12} md={6} item>
            <Paper elevation={0} className={classes.lSDescription}>
              <Typography className={classes.lSDescription__title} variant="h3" component="h2">
                Turbo Express Delivery
              </Typography>
              <Typography className={classes.lSDescription__subtitle} variant="h4" component="h3">
                The world is at your door step
              </Typography>
              <Typography className={classes.lSDescription__description} variant="subtitle1">
                We provide global delivery services with top-notch security and efficiency that satisfy your needs.
              </Typography>
              <Button elevation={0} className={classes.lSDescription__btn} variant="contained" color="secondary" size="large" component={Link} href="/contact">
                Get in touch
              </Button>
            </Paper>
          </Grid>
          <Grid sm={12} md={6} item>
            <Paper elevation={0} className={classes.lSDescription}>
              <Image src="/images/turbo.svg" alt="Turbo Express Delivery Image" width={670} height={450} layout="intrinsic" />
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.servicesSection} item>
        {/* Services Section */}
        <Typography className={classes.servicesTitle} variant="h4" gutterBottom>
          <IconButton className={classes.servicesIcon}>
            <SettingsIcon fontSize="large" color="secondary" />
          </IconButton>
          Our Services
        </Typography>

        <Grid container justify="space-around" direction="row">
          <Grid item sm={8} md={5} lg={4}>
            <Paper>
              <Typography variant="h5" gutterBottom>
                Express Services
              </Typography>
              <Typography variant="body1">With the current emphasis on complex free trade agreements and global sourcing, customs issues have assumed an increasingly important role in the supply chain. Our global customs services focus on the compliance, release and reporting needs of the marketplace.</Typography>
            </Paper>
          </Grid>
          <Grid item md={5} lg={4} />
        </Grid>
      </Grid>
    </Grid>
  );
}
