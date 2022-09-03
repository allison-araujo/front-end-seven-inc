import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

interface FormsValues {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = (props: FormsValues) => {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <form className={classes.root} autoComplete="off" {...rest}>
      {props.children}
    </form>
  );
};

export default Form;
