import { Card, makeStyles, Paper } from "@material-ui/core";
import { IPageHeaderProps } from "../../ts/types";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#532552",
    border: 10,
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#16161a",
  },
}));

const Header = (props: IPageHeaderProps) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{props.icon}</Card>
      </div>
    </Paper>
  );
};

export default Header;
