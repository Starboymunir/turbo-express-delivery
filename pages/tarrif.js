import Head from "next/head";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => createStyles({}));

export default function Tarrif() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Tarrif | Turbo Express Delivery</title>
      </Head>
    </div>
  );
}
