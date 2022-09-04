import { makeStyles, Paper } from "@material-ui/core";

import FormEmployee from "../FormEmployee/FormEmployee";

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    display: "flex",
  },
}));

const Employee = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.pageContent}>
        <FormEmployee />
      </Paper>
    </>
  );
};

export default Employee;
