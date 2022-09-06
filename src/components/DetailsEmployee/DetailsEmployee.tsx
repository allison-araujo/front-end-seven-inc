import { Employee } from "../../ts/types";

import { makeStyles } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles(theme => ({
  cards: {
    width: "100%",
    heigth: "100%",
    jusitfyContent: "center",
    marginTop: theme.spacing(3),
    backgroundColor: "#000",
    color: "#000",
  },
}));

const DetailsEmployee = (employee: Employee) => {
  const classes = useStyles();
  return (
    <Card className={classes.cards} sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {employee.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {employee.cpf}
        </Typography>
        <Typography sx={{ fontSize: 50 }} color="text.secondary" gutterBottom>
          {employee.email}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 50 }}>
          {employee.birth_date}
          <br />
          {employee.phone}
          <br />
          {employee.salary}
          <br />

          {employee.created_at}
          <br />
          <Typography variant="body2" color="text.secondary">
            {employee.id}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DetailsEmployee;
