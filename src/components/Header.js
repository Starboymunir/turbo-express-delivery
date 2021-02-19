import { cloneElement, Fragment, useEffect, useState } from "react";
import Link from "../Link";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { createStyles, fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import NestedMenuItem from "material-ui-nested-menu-item";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Image from "next/image";

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

  return cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    appBar: {
      backgroundColor: "#edeef0"
    },
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "theme.mixins.toolbar.minHeight"
    },
    menuButton: {},
    title: {
      flexGrow: 1,
      marginTop: "7px"
    },
    track: {
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(0)
      },
      padding: theme.spacing(0, 0, 0, 2),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.secondary.main, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.secondary.main, 0.25)
      },
      margin: theme.spacing(0, 5, 0, 0),
      [theme.breakpoints.up("lg")]: {
        margin: theme.spacing(0, 10, 0, 0)
      }
    },
    trackBtn: {
      padding: theme.spacing(1)
    },
    navLink: {
      minWidth: "5rem",
      textAlign: "center",
      fontSize: "1.125rem",
      textTransform: "none",
      fontWeight: 400
    },
    menu: {
      marginTop: "25px"
    },
    expansionSummary: {
      height: "15px"
    },
    drawerLogo: {
      padding: theme.spacing(2),
      textAlign: "center"
    },
    navLogo: {
      marginTop: "5px"
    },
    navMenu: {
      backgroundColor: "#edeef0",
      fontSize: "1.125rem"
    }
  })
);

const Header = props => {
  const classes = useStyles();
  let currentPath = useRouter().pathname;
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClick2 = e => {
    setAnchorEl2(e.currentTarget);
    setOpenMenu2(true);
  };

  const handleClose = e => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleClose2 = e => {
    setAnchorEl2(null);
    setOpenMenu2(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenu(false);
    }
  }

  function handleListKeyDown2(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenu2(false);
    }
  }

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
      case "/about":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/contact":
        if (value !== 4) {
          setValue(4);
        }
        break;
      default:
        break;
    }
  }, [currentPath]);

  const cargo = [
    { name: "Air Freight", link: "/air-freight" },
    { name: "Ocean Services", link: "/ocean-services" },
    { name: "Customs Clearance", link: "/customs-clearance" },
    { name: "Management Services", link: "/management-services" },
    { name: "Freight Services", link: "/freight-services" },
    { name: "Ocean Forwarding", link: "/ocean-forwarding" },
    { name: "Training", link: "/training" },
    { name: "Warehousing", link: "/warehousing" }
  ];

  const services = [
    { name: "Express Services", link: "/express-services" },
    { name: "Global Services", link: "/global-services" },
    { name: "Cargo Services", link: "/air-freight" }
  ];

  const tarrif = [
    { name: "List of Destinations", link: "/list-of-destinations" },
    { name: "Banned Commodities", link: "/banned-commodities" }
  ];

  const navTab = (
    <Fragment>
      <Tabs variant="fullWidth" value={value} onChange={handleChange} arial-label="main navigation tabs">
        <Tab className={classes.navLink} component={Link} label="Home" href="/" {...a11yProps(0)} />
        <Tab className={classes.navLink} component={Link} href="/express-services" label="Services" aria-haspopup={anchorEl ? "true" : undefined} aria-owns={anchorEl ? "services-menu" : undefined} onMouseOver={event => handleClick(event)} onMouseLeave={() => setOpenMenu(false)} />
        <Tab className={classes.navLink} component={Link} href="/list-of-destinations" label="Tarrif" aria-haspopup={anchorEl2 ? "true" : undefined} aria-owns={anchorEl2 ? "tarrif-menu" : undefined} onMouseOver={event => handleClick2(event)} onMouseLeave={() => setOpenMenu2(false)} />

        <Tab className={classes.navLink} component={Link} label="About" href="/about" {...a11yProps(3)} />
        <Tab className={classes.navLink} component={Link} label="Contact" href="/contact" {...a11yProps(4)} />
      </Tabs>
      <Popper open={openMenu} anchorEl={anchorEl} placement="bottom-start" role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: "top left" }}>
            <Paper elevation={0}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList onMouseOver={() => setOpenMenu(true)} onMouseLeave={handleClose} disablePadding autoFocusItem={false} id="services-menu" onKeyDown={handleListKeyDown}>
                  <MenuItem className={classes.navMenu} onClick={handleClose} component={Link} href="/express-services">
                    Express Services
                  </MenuItem>
                  <MenuItem className={classes.navMenu} onClick={handleClose} component={Link} href="/global-services">
                    Global Services
                  </MenuItem>
                  <NestedMenuItem className={classes.navMenu} label="Cargo Services" parentMenuOpen={!!openMenu}>
                    {cargo.map(item => (
                      <MenuItem className={classes.navMenu} key={item.name} onClick={handleClose} component={Link} href={item.link}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </NestedMenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      <Popper open={openMenu2} anchorEl={anchorEl2} placement="bottom-start" role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: "top left" }}>
            <Paper elevation={0}>
              <ClickAwayListener onClickAway={handleClose2}>
                <MenuList onMouseOver={() => setOpenMenu2(true)} onMouseLeave={handleClose2} disablePadding autoFocusItem={false} id="tarrif-menu" onKeyDown={handleListKeyDown2}>
                  <MenuItem className={classes.navMenu} onClick={handleClose2} component={Link} href="/list-of-destinations">
                    List of Destinations
                  </MenuItem>
                  <MenuItem className={classes.navMenu} onClick={handleClose2} component={Link} href="/banned-commodities">
                    Banned Commodities
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
        <div className={classes.drawerLogo}>
          <NextLink href="/">
            <a>
              <img src="/logo.svg" alt="Turbo Express Delivery Logo" />
            </a>
          </NextLink>
        </div>
        <List disablePadding>
          <ListItem
            button
            component={Link}
            href="/"
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <ListItemText>Home</ListItemText>
          </ListItem>
          <div className={classes.track}>
            <InputBase placeholder="Tracking number..." inputProps={{ "aria-label": "Track package" }} />
            <IconButton className={classes.trackBtn}>
              <SearchIcon />
            </IconButton>
          </div>
          <Accordion elevation={0}>
            <AccordionSummary classes={{ root: classes.expansionSummary }} expandIcon={<ExpandMoreIcon color="secondary" />}>
              <ListItem disableGutters button>
                <ListItemText
                  onClick={() => {
                    setOpenDrawer(false);
                  }}
                >
                  <Link href="/express-services" color="inherit">
                    Services
                  </Link>
                </ListItemText>
              </ListItem>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container direction="column">
                {services.map(service =>
                  service.name !== "Cargo Services" ? (
                    <Grid key={service.name + service.link} item>
                      <ListItem
                        button
                        component={Link}
                        href={service.link}
                        onClick={() => {
                          setOpenDrawer(false);
                        }}
                      >
                        <ListItemText>{service.name}</ListItemText>
                      </ListItem>
                    </Grid>
                  ) : (
                    <Grid key={service.name + service.link} item>
                      <Accordion elevation={0}>
                        <AccordionSummary classes={{ root: classes.expansionSummary }} expandIcon={<ExpandMoreIcon color="secondary" />}>
                          <ListItem disableGutters button>
                            <ListItemText
                              onClick={() => {
                                setOpenDrawer(false);
                              }}
                            >
                              <Link href={service.link} color="inherit">
                                {service.name}
                              </Link>
                            </ListItemText>
                          </ListItem>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Grid container direction="column">
                            {cargo.map(item => (
                              <Grid key={item.name + item.link} item>
                                <ListItem
                                  button
                                  component={Link}
                                  href={item.link}
                                  onClick={() => {
                                    setOpenDrawer(false);
                                  }}
                                >
                                  <ListItemText>{item.name}</ListItemText>
                                </ListItem>
                              </Grid>
                            ))}
                          </Grid>
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                  )
                )}
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={0}>
            <AccordionSummary classes={{ root: classes.expansionSummary }} expandIcon={<ExpandMoreIcon color="secondary" />}>
              <ListItem disableGutters button>
                <ListItemText
                  onClick={() => {
                    setOpenDrawer(false);
                  }}
                >
                  <Link href="/list-of-destinations" color="inherit">
                    Tarrif
                  </Link>
                </ListItemText>
              </ListItem>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container direction="column">
                {tarrif.map(item => (
                  <Grid key={item.name + item.link} item>
                    <ListItem
                      button
                      component={Link}
                      href={item.link}
                      onClick={() => {
                        setOpenDrawer(false);
                      }}
                    >
                      <ListItemText>{item.name}</ListItemText>
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
          <ListItem
            button
            component={Link}
            href="/about"
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <ListItemText>About</ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            href="/contact"
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <ListItemText>Contact</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </Fragment>
  );

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar color="default" className={classes.appBar} position="fixed">
          <Toolbar>
            <div className={classes.title}>
              <Image component={Link} href="/" src="/logo.svg" alt="Turbo Express Delivery Logo" layout="fixed" width={101} height={45} />
            </div>
            <Hidden smDown>
              <div className={classes.track}>
                <InputBase placeholder="Tracking number..." inputProps={{ "aria-label": "Track package" }} />
                <IconButton className={classes.trackBtn}>
                  <SearchIcon />
                </IconButton>
              </div>
            </Hidden>
            <Hidden mdUp>
              <IconButton onClick={() => setOpenDrawer(!openDrawer)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown>{navTab}</Hidden>
            <Hidden mdUp>{drawer}</Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

export default Header;
