import { Fragment } from "react";
import Head from "next/head";
import generalStyle from "../src/styles/_general";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import ClassIcon from "@material-ui/icons/Class";
import IconButton from "@material-ui/core/IconButton";

export default function Training() {
  const classes = generalStyle();

  return (
    <Fragment>
      <Head>
        <title>Training | Turbo Express Delivery</title>
        <meta name="description" key="description" content="Training at Turbo Express Delivery" />
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
      </Head>
      <Grid className={classes.mainContainer} container alignItems="center" direction="column">
        <Zoom clear>
          <Typography variant="h3" component="h1" gutterBottom>
            <IconButton>
              <ClassIcon className={classes.titleIcon} color="primary" />
            </IconButton>{" "}
            Training
          </Typography>
        </Zoom>

        <Grid md={8} lg={6} elevation={0} item>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Transition / Implementation
            </Typography>
            <Typography variant="body1" gutterBottom>
              Turbo Express Cargo has developed a successful global transition/implementation process using experienced professionals who are responsible for providing an accurate assessment of what business is secured, what transition elements exist and to develop measurable and obtainable tasks to accomplish a global, seamless transition to Turbo Express Cargo Account Management Program.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              The assigned Transition team makes sure these 2 conditions are in places:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">All of the Customer’s business covered by the agreement has been transitioned to Turbo Express Cargo</Typography>
              </li>
              <li>
                <Typography variant="body1">The Customer agrees the transition is successful after completing a positive QMR(scorecard) We have dedicated resources geographically with a “project owner” to keep everyone on track. Once a decision has been made regarding the amount of business Turbo Express Cargo has been awarded, we request to meet with the customer’s transition team to confirm the scope of the business and to prioritize the events based on their needs.</Typography>
              </li>
            </ul>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              The Transition Team will address the following elements:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">Process flow for each function to confirm process elements</Typography>
              </li>
              <li>
                <Typography variant="body1">Local market requirements (including site visits if needed)</Typography>
              </li>
              <li>
                <Typography variant="body1">Electronic interface</Typography>
              </li>
              <li>
                <Typography variant="body1">Software enhancements</Typography>
              </li>
              <li>
                <Typography variant="body1">Operational procedures (developing SOPs)</Typography>
              </li>
              <li>
                <Typography variant="body1">Service standards (establishing metrics)+</Typography>
              </li>
              <li>
                <Typography variant="body1">Measurement of service and compliance standards</Typography>
              </li>
            </ul>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              The investment Turbo Express Cargo has made to provide “transition expertise” to our new customers has many significant benefits:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our handoff from Sales to Account Management is seamless
            </Typography>
            <Typography variant="body1" gutterBottom>
              The transition period is reduced and we also consistently see a reduction in transition related expenses because duplicate efforts due to poor communication/planning are eliminated.
            </Typography>
            <Typography variant="body1" gutterBottom>
              The tasks, their owners and support resources are identified early. Their timelines are clear and measurable.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Training and Personnel Development
            </Typography>
            <Typography variant="body1" gutterBottom>
              Turbo Express Cargo commitment to Quality in People and Customer Service, is supported by Training and Personnel Development, which is a dedicated internal service, that help our people understand and follow our standards, systems and procedures for all our customers.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Turbo Express Cargo Employees get at least 52 hours of training per year, to be compliant with one of the company’s goals: to have highly motivated people with an intensive industry knowledge base. We enable our employees to grow and advance in their careers.
            </Typography>
            <Typography variant="body1" gutterBottom>
              We provide Ongoing Compliance and Regulatory Training, covering all products (Air, Ocean, Distribution, etc…), as well as the Dangerous Goods Regulations and Shipment Handling. We have In House certification programs, and a very rich training library offering both Computer Based/Self Directed Training, as well as Trainer Led Courses.
            </Typography>
          </Zoom>
          <Zoom clear>
            <Typography className={`${classes.smallBlueHeading} ${classes.mt3}`} variant="h5" gutterBottom>
              Door-to-Door Tracking
            </Typography>
            <Typography variant="body1" gutterBottom>
              You can dial in to track your shipment, receive a daily status report, or allow our office to call you with the status of each order.
            </Typography>
          </Zoom>
        </Grid>
      </Grid>
    </Fragment>
  );
}
