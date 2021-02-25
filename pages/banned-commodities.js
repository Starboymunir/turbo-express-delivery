import { Fragment } from "react";
import Head from "next/head";
import generalStyle from "../src/styles/_general";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import BlockIcon from "@material-ui/icons/Block";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";

const commodities = [
  { c1: "Alcoholic Beverages", c2: "Animal Products" },
  { c1: "Articles Of Unusual Value", c2: "Precious & Semi Precious Items" },
  { c1: "Currency", c2: "Dangerous Goods" },
  { c1: "Firearms", c2: "Firearm Parts" },
  { c1: "Furs", c2: "Hazardous Materials" },
  { c1: "Ivory", c2: "Live Animals" },
  { c1: "Negotiable Bonds / Drafts", c2: "Perishables" },
  { c1: "Persian Rugs", c2: "Personal Effects" },
  { c1: "Plants", c2: "Pornographic Materials" },
  { c1: "Poisonous Articles", c2: "Pakistani Postal Departments Items" },
  { c1: "Corrosive Materials", c2: "Radioactive Materials" },
  { c1: "Liquids And Semi Liquids", c2: "" }
];

export default function BannedCommodities() {
  const classes = generalStyle();

  return (
    <Fragment>
      <Head>
        <title>Banned Commodities | Turbo Express Delivery</title>
        <meta name="description" key="description" content="Banned Commodities at Turbo Express Delivery" />
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
        <meta property="og:image" key="og:image" content="https://www.turboexpressdelivery.com/images/turbo.png"></meta>
        <meta property="og:url" key="og:url" content="www.turboexpressdelivery.com" />
        <link rel="canonical" key="canonical" href="https://www.turboexpressdelivery.com/banned-commodities" />
      </Head>
      <Grid className={classes.mainContainerNoPad} container alignItems="center" direction="column">
        <Zoom clear>
          <Typography className={classes.px3} variant="h3" component="h1" gutterBottom>
            <IconButton>
              <BlockIcon className={classes.titleIcon} color="primary" />
            </IconButton>{" "}
            Banned Items
          </Typography>
        </Zoom>
        <Grid justify="space-around" container item>
          {commodities.map(item => (
            <Grid key={item.c1} xs={12} md={6} lg={5} item>
              <Zoom clear>
                <Paper className={classes.pxy3 + " " + classes.bgPrimary + " " + classes.mt3}>
                  <Typography className={classes.textWhite} variant="body1">
                    {item.c1}
                  </Typography>
                </Paper>
                {item.c2 && (
                  <Paper className={classes.pxy3 + " " + classes.bgPrimary + " " + classes.mt3}>
                    <Typography className={classes.textWhite} variant="body1">
                      {item.c2}
                    </Typography>
                  </Paper>
                )}
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
}
