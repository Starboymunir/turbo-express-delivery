import Head from "next/head";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => createStyles({}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Contact | Turbo Express Delivery</title>
      </Head>
    </div>
  );
}
