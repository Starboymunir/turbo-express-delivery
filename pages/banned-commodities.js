import Head from "next/head";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => createStyles({}));

export default function BannedCommodities() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Banned Commodities | Turbo Express Delivery</title>
      </Head>
    </div>
  );
}
