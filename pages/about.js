import Head from "next/head";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => createStyles({}));

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>About | Turbo Express Delivery</title>
      </Head>
    </div>
  );
}
