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
import NestedMenuItem from "material-ui-nested-menu-item";
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
  const [menuPosition, setMenuPosition] = useState(null);
  const [menuPosition2, setMenuPosition2] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = e => {
    if (menuPosition) {
      return;
    }
    console.log(e);
    e.preventDefault();
    setMenuPosition({
      top: e.pageY,
      left: e.pageX
    });
  };

  const handleClick2 = e => {
    if (menuPosition2) {
      return;
    }
    e.preventDefault();
    setMenuPosition2({
      top: e.pageY,
      left: e.pageX
    });
  };

  const handleItemClick = event => {
    setMenuPosition(null);
  };

  const handleItemClick2 = event => {
    setMenuPosition2(null);
  };

  useEffect(() => {
    switch (currentPath) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/express-services":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/global-services":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/air-freight":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/ocean-forwarding":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/ocean-services":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/custom-clearance":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/management-services":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/freight-services":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/training":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/warehousing":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/list-of-destinations":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/banned-commodities":
        if (value !== 2) {
          setValue(2);
        }
        break;
      default:
        break;
    }
  }, [currentPath]);

  const navTab = (
    <React.Fragment>
      <Tabs variant="fullWidth" value={value} onChange={handleChange} arial-label="main navigation tabs">
        <Tab className={classes.navLink} component={Link} label="Home" href="/" {...a11yProps(0)} />
        <Tab className={classes.navLink} label="Services" onClick={handleClick} />
        <Tab className={classes.navLink} label="Tarrif" onClick={event => handleClick2(event)} />
        <Tab className={classes.navLink} component={Link} label="About" href="/about" {...a11yProps(3)} />
      </Tabs>
      <Menu open={!!menuPosition} onClose={() => setMenuPosition(null)} anchorReference="anchorPosition" anchorPosition={menuPosition} elevation={0}>
        <MenuItem onClick={handleItemClick} component={Link} href="/express-services">
          Express Services
        </MenuItem>
        <MenuItem onClick={handleItemClick} component={Link} href="/global-services">
          Global Services
        </MenuItem>
        <NestedMenuItem label="Cargo Services" parentMenuOpen={!!menuPosition}>
          <MenuItem onClick={handleItemClick} component={Link} href="/air-freight">
            Air Freight
          </MenuItem>
          <MenuItem onClick={handleItemClick} component={Link} href="/ocean-services">
            Ocean Services
          </MenuItem>
          <MenuItem onClick={handleItemClick} component={Link} href="/customs-clearance">
            Customs Clearance
          </MenuItem>
          <MenuItem onClick={handleItemClick} component={Link} href="/management-services">
            Management Services
          </MenuItem>
          <MenuItem onClick={handleItemClick} component={Link} href="/freight-services">
            Freight Services
          </MenuItem>
          <MenuItem onClick={handleItemClick} component={Link} href="/ocean-forwarding">
            Ocean Forwarding
          </MenuItem>
          <MenuItem onClick={handleItemClick} component={Link} href="/training">
            Training
          </MenuItem>
          <MenuItem onClick={handleItemClick} component={Link} href="/warehousing">
            Warehousing
          </MenuItem>
        </NestedMenuItem>
      </Menu>

      <Menu open={!!menuPosition2} onClose={() => setMenuPosition2(null)} anchorReference="anchorPosition" anchorPosition={menuPosition2} elevation={0}>
        <MenuItem onClick={handleItemClick2} component={Link} href="/list-of-destinations">
          List of Destinations
        </MenuItem>
        <MenuItem onClick={handleItemClick2} component={Link} href="/banned-commodities">
          Banned Commodities
        </MenuItem>
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
