import { makeStyles, TableBody, TableCell } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { Button, styled, Table, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteEmplooyer,
  findEmplooyers,
} from "../../services/serviceEmployee";
import { Employee } from "../../ts/types";

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

const useStyles = makeStyles(theme => ({
  table: {
    width: "5%",
    marginTop: theme.spacing(3),
    "& thead th": {
      fontWeight: "600",
      color: "#333996",
      backgroundColor: "#3c44b126",
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "#ececf0",
      cursor: "pointer",
    },
  },
}));

const ListEmployee = () => {
  const [emplooyer, setEmploy] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    listFindEmploye();
  }, []);

  const deleteEmployee = async (id: any) => {
    await deleteEmplooyer(id);
    listFindEmploye();
  };

  const listFindEmploye = async () => {
    let response = await findEmplooyers();
    setEmploy(response?.data);
  };

  const TblContainer = (props: any) => (
    <Table className={classes.table}>{props.children}</Table>
  );

  return (
    <TblContainer>
      <TableHead>
        <THead>
          <TableCell>Código</TableCell>
          <TableCell>Nome</TableCell>
          <TableCell>Cpf</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Telefone</TableCell>
          <TableCell>Data de Nascimento</TableCell>
          <TableCell>Salário</TableCell>
          <TableCell>Data do contrato</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {emplooyer.map((item: Employee) => (
          <TRow key={item.id}>
            <Link to={`/employeee/${item.id}`}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.cpf}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.birth_date}</TableCell>
              <TableCell>{item.salary}</TableCell>
              <TableCell>{item.created_at}</TableCell>
            </Link>

            <TableCell>
              <Button
                color="primary"
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/employee/${item.id}`}
              >
                <Edit fontSize="large" />
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => deleteEmployee(item.id)}
              >
                <Delete fontSize="large" />
              </Button>
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </TblContainer>
  );
};

export default ListEmployee;
