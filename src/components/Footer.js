import Link from "../Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    footer: {
      padding: theme.spacing(3, 1),
      textAlign: "center",
      backgroundColor: "#edeef0"
    }
  })
);

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2">
        Copyright &copy; 2021 Turbo Express Delivery. All rights reserved.{" "}
        <Button variant="contained" elevation={0} color="primary" size="small" component={Link} href="/contact">
          Get in touch
        </Button>
      </Typography>
    </footer>
  );
};

export default Footer;
