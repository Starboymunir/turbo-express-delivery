import Head from "next/head";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => createStyles({}));

export default function Destinations() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Destinations | Turbo Express Delivery</title>
      </Head>
    </div>
  );
}
