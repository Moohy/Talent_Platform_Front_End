/* eslint-disable */
import React from "react";
import history from "../../history"
import API from "../../API"
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import Grid from '@material-ui/core/Grid';

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import Home from "@material-ui/icons/Home";
import Contact from "@material-ui/icons/Email";
import Signup from "@material-ui/icons/Person";
import Signin from "@material-ui/icons/ExitToApp";
import Signout from "@material-ui/icons/Lock";
import Manage from "@material-ui/icons/Settings";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ViewDay from "@material-ui/icons/ViewDay";
import Dns from "@material-ui/icons/Dns";
import Build from "@material-ui/icons/Build";
import ListIcon from "@material-ui/icons/List";
import People from "@material-ui/icons/People";
import Assignment from "@material-ui/icons/Assignment";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Chat from "@material-ui/icons/Chat";
import Call from "@material-ui/icons/Call";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccountBalance from "@material-ui/icons/AccountBalance";
import ArtTrack from "@material-ui/icons/ArtTrack";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import LocationOn from "@material-ui/icons/LocationOn";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Store from "@material-ui/icons/Store";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Layers from "@material-ui/icons/Layers";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LineStyle from "@material-ui/icons/LineStyle";
import Error from "@material-ui/icons/Error";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";
import Axios from "axios";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const [isLoggedIn,setIsLoggedIn] = React.useState(false)
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};



  const { dropdownHoverColor } = props;
  const classes = useStyles();
  const loggedout = (
    <>
      <ListItem className={classes.listItem}>
        <Link to="/signup" >
          <Button
            color={window.innerWidth < 960 ? "info" : "white"}
            target="_blank"
            className={classes.navButton}
          >
            <Signup className={classes.icons} /> Sign Up
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/signin" >
          <Button
            color={window.innerWidth < 960 ? "info" : "white"}
            target="_blank"
            className={classes.navButton}
            simple
          >
            <Signin className={classes.icons} /> Sign In
          </Button>
        </Link>
      </ListItem>
    </>
  );
  const loggedin = (
    <>
      <ListItem className={classes.listItem}>
        <Link to="/profile" >
          <Button
            color={window.innerWidth < 960 ? "info" : "white"}
            target="_blank"
            className={classes.navButton}
            simple
          >
            <Signup className={classes.icons} /> Profile
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            color={window.innerWidth < 960 ? "info" : "white"}
            target="_blank"
            className={classes.navButton}
            simple
            onClick={()=>{
              localStorage.removeItem("user_type")
              localStorage.removeItem("token")
              setIsLoggedIn(false)
              history.push("/")
            }}
          >
            <Signout className={classes.icons} /> Sign Out
          </Button>
      </ListItem>
    </>
  );

  const buyer = (
    <>
      <ListItem className={classes.listItem}>
        <Link to="/my-offers" >
          <Button
            color={window.innerWidth < 960 ? "info" : "white"}
            target="_blank"
            className={classes.navButton}
            simple
          >
            <Manage className={classes.icons} /> My Offers
          </Button>
        </Link>
      </ListItem>
    </>
  );

  const seller = (
    <>
      <ListItem className={classes.listItem}>
        <Link to="/my-services" >
          <Button
            color={window.innerWidth < 960 ? "info" : "white"}
            target="_blank"
            className={classes.navButton}
            simple
          >
            <Manage className={classes.icons} /> My Services
          </Button>
        </Link>
      </ListItem>
    </>
  );

  const isLoggedin = () => {

        Axios.get(`${API.url}/is_loggedin`, {headers: {"Authorization": `Bearer ${localStorage.token}`}})
        .then(r=>{
          setIsLoggedIn(r.data.status)
        })
    return isLoggedIn
  }
  const isSeller = () => {
    if(localStorage.getItem('user_type') == "seller"){
      return true
    }
    return false
  }

  return (
    <>
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Link to="/" >
          <Button
            color={window.innerWidth < 960 ? "info" : "white"}
            target="_blank"
            className={classes.navButton}
            simple
          >
            <Home className={classes.icons} /> Home
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/services" >
          <Button
            color={window.innerWidth < 960 ? "info" : "white"}
            target="_blank"
            className={classes.navButton}
            simple
          >
            <Apps className={classes.icons} /> Browse Services
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem+" "+classes.border}>
        <Link to="/about-us" >
          <Button
            color={window.innerWidth < 960 ? "info" : "white"}
            target="_blank"
            className={classes.navButton}
            simple
          >
            <Contact className={classes.icons} /> About Us
          </Button>
        </Link>
      </ListItem>
      
      
    </List>
    
      {/* <Divider  variant={"fullWidth"}/> */}
    {/* <Grid  container alignItems="center" className={classes.root}>
      <Divider  orientation="vertical"/>
    </Grid> */}
    
    <List className={classes.list }>
      {isLoggedin()? (isSeller()? seller:buyer):null}
      {isLoggedin()? loggedin:loggedout}
    </List>
    </>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
