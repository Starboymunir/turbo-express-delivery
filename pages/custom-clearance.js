import Head from "next/head";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => createStyles({}));

export default function CustomClearance() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Custom Clearance | Turbo Express Delivery</title>
      </Head>
    </div>
  );
}
