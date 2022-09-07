import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(4),
    position: "absolute",
    left: "0px",
    width: "200px",
    height: "100%",
    backgroundColor: "#541e53",
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return <div className={classes.sideMenu}></div>;
};

export default Sidebar;
