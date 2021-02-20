import Axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import generalStyle from "../../src/styles/_general";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

Axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URI;

export default function Tracking({ isValid }) {
  const classes = generalStyle();
  const [updateField, setUpdateField] = useState("senderPhone");
  const [orderNumberNew, setOrderNumberNew] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderLocation, setSenderLocation] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [shipDate, setShipDate] = useState("");
  const [receiverLocation, setReceiverLocation] = useState("");
  const [shipmentDestination, setShipmentDestination] = useState("");
  const [expectedDate, setExpectedDate] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [firstStop, setFirstStop] = useState("");
  const [secondStop, setSecondStop] = useState("");
  const [thirdStop, setThirdStop] = useState("");
  const [description, setDescription] = useState("");
  const [orderNumberDel, setOrderNumberDel] = useState("");
  const [orderNumberUpdate, setOrderNumberUpdate] = useState("");
  const [newUpdateValue, setNewUpdateValue] = useState("");
  const [submitCount, setSubmitCount] = useState(0);
  const [deleteCount, setDeleteCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    if (submitCount) {
      const myRequest = Axios.CancelToken.source();

      async function addNew() {
        try {
          await Axios.post("/addOrder", { number: orderNumberNew, senderPhone, senderEmail, senderLocation, receiverPhone, receiverEmail, receiverLocation, shipmentDestination, shipDate, expectedDate, description, currentLocation, currentStatus, firstStop, secondStop, thirdStop }, { cancelToken: myRequest.token });

          alert("Item was successfully added to the database.");
          setSubmitCount(0);
        } catch (error) {
          alert("Add new package not successful");
          console.error("Add new package not successful");
          setSubmitCount(0);
        }
      }

      addNew();
      return () => {
        myRequest.cancel();
      };
    }
  }, [submitCount]);

  useEffect(() => {
    if (deleteCount) {
      const myRequest = Axios.CancelToken.source();

      async function deleteOrder() {
        try {
          await Axios.post("/removeOrder", { number: orderNumberDel }, { cancelToken: myRequest.token });

          alert("Item was successfully deleted from the database.");
          setDeleteCount(0);
        } catch (error) {
          alert("Delete package not successful");
          console.error("Delete package not successful");
          setDeleteCount(0);
        }
      }

      deleteOrder();
      return () => {
        myRequest.cancel();
      };
    }
  }, [deleteCount]);

  useEffect(() => {
    if (updateCount) {
      const myRequest = Axios.CancelToken.source();

      async function updateOrder() {
        try {
          await Axios.post("/updateOrder", { number: orderNumberUpdate, fieldToUpdate: updateField, newUpdateValue }, { cancelToken: myRequest.token });

          alert("Item was successfully updated in the database.");
          setUpdateCount(0);
        } catch (error) {
          alert("Update package not successful");
          console.error("Update package not successful");
          setUpdateCount(0);
        }
      }

      updateOrder();
      return () => {
        myRequest.cancel();
      };
    }
  }, [updateCount]);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitCount(1);
  };

  const handleDelete = e => {
    e.preventDefault();
    setDeleteCount(1);
  };

  const handleUpdate = e => {
    e.preventDefault();
    setUpdateCount(1);
  };

  return (
    <Fragment>
      <Head>
        <title>Admin | Turbo Express Delivery</title>
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
      </Head>
      <Grid className={classes.mainContainer} container alignItems="center" direction="column">
        <Zoom clear>
          <Typography variant="h3" component="h2" gutterBottom>
            Admin
          </Typography>
        </Zoom>

        <Grid item>
          <Typography className={classes.textCenter} variant="h4" gutterBottom>
            Add package to database
          </Typography>
          <form onSubmit={handleSubmit} className={classes.textCenter}>
            <Grid className={classes.mb3} justify="space-around" container>
              <Grid xs={12} sm={6} md={4} item>
                <FormControl>
                  <InputLabel htmlFor="order-number">Order number</InputLabel>
                  <Input required onChange={e => setOrderNumberNew(e.target.value)} id="order-number" aria-describedby="order number" />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <FormControl>
                  <InputLabel htmlFor="sender-phone-number">Sender phone</InputLabel>
                  <Input required onChange={e => setSenderPhone(e.target.value)} id="sender-phone-number" aria-describedby="order number" />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <FormControl>
                  <InputLabel htmlFor="sender-email-address">Sender email</InputLabel>
                  <Input required onChange={e => setSenderEmail(e.target.value)} id="sender-email-address" aria-describedby="sender email address" />
                </FormControl>
              </Grid>
              <Grid xs={12} md={9} item>
                <FormControl fullWidth>
                  <InputLabel htmlFor="sender-location">Sender location</InputLabel>
                  <Input required onChange={e => setSenderLocation(e.target.value)} id="sender-location" aria-describedby="Sender location" />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <FormControl>
                  <InputLabel htmlFor="recevier-phone">Receiver phone</InputLabel>
                  <Input required onChange={e => setReceiverPhone(e.target.value)} id="recevier-phone" aria-describedby="Receiver phone number" />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <FormControl>
                  <InputLabel htmlFor="receiver-email">Receiver email</InputLabel>
                  <Input required onChange={e => setReceiverEmail(e.target.value)} id="receiver-email" aria-describedby="Receiver email address" />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <InputLabel htmlFor="ship-date">Ship date</InputLabel>
                <FormControl>
                  <Input required onChange={e => setShipDate(e.target.value)} id="ship-date" placeholder="" type="date" aria-describedby="Ship date" />
                </FormControl>
              </Grid>
              <Grid xs={12} md={9} item>
                <FormControl fullWidth>
                  <InputLabel htmlFor="receiver-location">Receiver location</InputLabel>
                  <Input required onChange={e => setReceiverLocation(e.target.value)} id="receiver-location" aria-describedby="Receiver location" />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <FormControl>
                  <InputLabel htmlFor="shipment-destination">Shipment destination</InputLabel>
                  <Input required onChange={e => setShipmentDestination(e.target.value)} id="shipment-destination" aria-describedby="Shipment destination" />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <InputLabel htmlFor="expected-date"> Expected Date</InputLabel>
                <FormControl>
                  <Input required onChange={e => setExpectedDate(e.target.value)} id="expected-date" type="date" aria-describedby="Expected date" />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <FormControl>
                  <InputLabel htmlFor="current-status">Current status</InputLabel>
                  <Input required onChange={e => setCurrentStatus(e.target.value)} id="current-status" aria-describedby="Current status" />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <FormControl>
                  <InputLabel htmlFor="current-location">Current Location</InputLabel>
                  <Input required onChange={e => setCurrentLocation(e.target.value)} id="current-location" aria-describedby="Current Location" />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <FormControl>
                  <InputLabel htmlFor="first-stop">First stop</InputLabel>
                  <Input required onChange={e => setFirstStop(e.target.value)} id="first-stop" aria-describedby="First stop" />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <FormControl>
                  <InputLabel htmlFor="Second-stop">Second stop</InputLabel>
                  <Input required onChange={e => setSecondStop(e.target.value)} id="Second-stop" aria-describedby="Second stop" />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <FormControl>
                  <InputLabel htmlFor="Third-stop">Third stop</InputLabel>
                  <Input required onChange={e => setThirdStop(e.target.value)} id="Third-stop" aria-describedby="Third stop" />
                </FormControl>
              </Grid>
              <Grid xs={12} md={9} item>
                <FormControl fullWidth>
                  <InputLabel htmlFor="Description">Description</InputLabel>
                  <Input required onChange={e => setDescription(e.target.value)} id="Description" aria-describedby="Description" />
                </FormControl>
              </Grid>
            </Grid>

            <Button type="submit" variant="contained" color="secondary" className={classes.textWhite}>
              Add package to database
            </Button>
          </form>
        </Grid>

        <Grid item>
          <Typography className={`${classes.textCenter} ${classes.mt5}`} variant="h4" gutterBottom>
            Delete package from database
          </Typography>
          <form onSubmit={handleDelete} className={classes.textCenter}>
            <FormControl>
              <InputLabel htmlFor="order-number-delete">Order number</InputLabel>
              <Input required onChange={e => setOrderNumberDel(e.target.value)} id="order-number-delete" aria-describedby="order number" />
            </FormControl>

            <Button type="submit" variant="contained" color="secondary" className={`${classes.textWhite} ${classes.mt2}`}>
              Delete
            </Button>
          </form>
        </Grid>

        <Grid item>
          <Typography className={`${classes.textCenter} ${classes.mt5}`} variant="h4" gutterBottom>
            Update a field in an existing package
          </Typography>
          <form onSubmit={handleUpdate} className={classes.textCenter}>
            <Grid className={classes.mb3} justify="space-around" container>
              <Grid xs={12} sm={6} md={4} item>
                <FormControl>
                  <InputLabel htmlFor="order-number-update">Package number</InputLabel>
                  <Input required onChange={e => setOrderNumberUpdate(e.target.value)} id="order-number-update" aria-describedby="order number to update" />
                </FormControl>
              </Grid>

              <Grid xs={12} sm={6} md={4} item>
                <TextField required label="Field" select id="update-field" value={updateField} onChange={e => setUpdateField(e.target.value)} helperText="Select field to update">
                  <MenuItem value="senderPhone">Sender phone</MenuItem>
                  <MenuItem value="senderEmail">Sender email</MenuItem>
                  <MenuItem value="senderLocation">Sender location</MenuItem>
                  <MenuItem value="receiverPhone">Receiver phone</MenuItem>
                  <MenuItem value="receiverEmail">Receiver email</MenuItem>
                  <MenuItem value="receiverLocation">Receiver location</MenuItem>
                  <MenuItem value="shipmentDestination">Shipment destination</MenuItem>
                  <MenuItem value="shipDate">Ship date</MenuItem>
                  <MenuItem value="expectedDate">Expected date</MenuItem>
                  <MenuItem value="description">Description</MenuItem>
                  <MenuItem value="currentLocation">Current location</MenuItem>
                  <MenuItem value="currentStatus">Current status</MenuItem>
                  <MenuItem value="firstStop">First stop</MenuItem>
                  <MenuItem value="secondStop">Second stop</MenuItem>
                  <MenuItem value="thirdStop">Third stop</MenuItem>
                </TextField>
              </Grid>

              <Grid xs={12} sm={6} md={4} item>
                <FormControl>
                  <InputLabel htmlFor="new-field-value">New field value</InputLabel>
                  <Input required onChange={e => setNewUpdateValue(e.target.value)} id="new-field-value" aria-describedby="New field value" />
                </FormControl>
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="secondary" className={`${classes.textWhite} ${classes.mt2}`}>
              Update
            </Button>
          </form>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const paths = [`/admin-at-turbo-delivery/${process.env.NEXT_PUBLIC_ADMIN_SECRET}`];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await Axios.post(`/checkKey`, { secretKey: params.secret });
  const isValid = response.data;
  return { props: { isValid } };
}
