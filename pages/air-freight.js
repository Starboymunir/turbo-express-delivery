import Head from "next/head";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => createStyles({}));

export default function CargoServices() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Air Freight | Turbo Express Delivery</title>
      </Head>
    </div>
  );
}
