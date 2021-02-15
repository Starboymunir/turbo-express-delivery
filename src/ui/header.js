import React, { useEffect, useState } from "react";
import Link from "../Link";
import { useRouter } from "next/router";
import { createStyles, fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import theme from "./theme";

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? "default" : "transparent"
  });
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    appBar: {},
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    track: {
      padding: theme.spacing(0, 0, 0, 2),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.secondary.main, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.secondary.main, 0.25)
      },
      margin: theme.spacing(0, 8, 0, 0)
    },
    trackBtn: {
      padding: theme.spacing(1)
    },
    navLink: {
      minWidth: "5rem",
      marginLeft: "15px"
    },
    menu: {
      marginTop: "25px"
    }
  })
);

const Header = props => {
  const classes = useStyles();
  let currentPath = useRouter().pathname;
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  useEffect(() => {
    switch (currentPath) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/services":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/tarrif":
        if (value !== 2) {
          setValue(2);
        }
        break;
      default:
        break;
    }
  }, [currentPath]);

  const menuOptions = [
    { name: "Express Services", link: "/express-services" },
    { name: "Global Services", link: "/global-services" },
    { name: "Cargo Services", link: "/air-freight" }
  ];

  const navTab = (
    <React.Fragment>
      <Tabs variant="fullWidth" value={value} onChange={handleChange} arial-label="main navigation tabs">
        <Tab className={classes.navLink} component={Link} label="Home" href="/" {...a11yProps(0)} />
        <Tab className={classes.navLink} component={Link} aria-owns={anchorEl ? "services-menu" : undefined} aria-haspopup={anchorEl ? "true" : undefined} label="Services" onMouseOver={event => handleClick(event)} href="/services" {...a11yProps(1)} />
        <Tab className={classes.navLink} component={Link} label="Tarrif" href="/tarrif" {...a11yProps(2)} />
        <Tab className={classes.navLink} component={Link} label="About" href="/about" {...a11yProps(3)} />
      </Tabs>
      <Menu id="services-menu" anchorEl={anchorEl} open={openMenu} onClose={handleClose} elevation={0} classes={{ paper: classes.menu }} MenuListProps={{ onMouseLeave: handleClose }}>
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option.name}
            component={Link}
            href={option.link}
            onClick={event => {
              handleMenuItemClick(event, i);
              setValue(1);
              handleClose();
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Turbo Express
            </Typography>
            <div className={classes.track}>
              <InputBase placeholder="Tracking number..." inputProps={{ "aria-label": "Track package" }} />
              <IconButton className={classes.trackBtn}>
                <SearchIcon />
              </IconButton>
            </div>

            {navTab}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

export default Header;
