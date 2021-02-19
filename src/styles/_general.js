import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    mainContainer: {
      padding: theme.spacing(10, 3),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(10, 8)
      }
    },
    mainContainerNoPad: {
      padding: theme.spacing(10, 0)
    },
    titleIcon: {
      fontSize: 45,
      marginTop: -7,
      cursor: "text"
    },
    smallBlueHeading: {
      color: theme.palette.primary.main
    },
    mt3: {
      marginTop: theme.spacing(3)
    },
    mb3: {
      marginBottom: theme.spacing(3)
    },
    pxy3: {
      padding: theme.spacing(3)
    },
    px3: {
      padding: theme.spacing(0, 3)
    },
    pxy2: {
      padding: theme.spacing(2)
    },
    bgPrimary: {
      backgroundColor: theme.palette.primary.main
    },
    bgSecondary: {
      backgroundColor: theme.palette.secondary.main
    },
    textWhite: {
      color: "white"
    },
    textCenter: {
      textAlign: "center"
    },
    w100: {
      width: "100%"
    },
    mb100: {
      marginBottom: "100vh"
    }
  })
);

export default useStyles;
