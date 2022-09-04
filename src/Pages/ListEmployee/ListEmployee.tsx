import { makeStyles, TableBody, TableCell } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { Button, styled, Table, TableHead, TableRow } from "@mui/material";
import { useState } from "react";

// const StyledTable = styled(Table)`
//   width: 90%;
//   margin: 50px 0 0 50px;
// `;

const emplooyer = [
  {
    id: 1,
    name: "Caroline Mendes",
    cpf: "713.166.090-65",
    email: "caroline@gmail.com",
    phone: "7896547896",
    birth_date: "31/10/1997",
    salary: "2.300",
    created_at: "14/05/2022",
  },
  {
    id: 2,
    name: "samir",
    cpf: "713.166.090-65",
    email: "samor@gmail.com",
    phone: "7896547896",
    birth_date: "31/10/1997",
    salary: "2.300",
    created_at: "14/05/2022",
  },
  {
    id: 4,
    name: "Mohd Shami",
    cpf: "713.166.090-65",
    email: "shami@gmail.com",
    phone: "7896547896",
    birth_date: "31/10/1997",
    salary: "2.300",
    created_at: "14/05/2022",
  },
  {
    id: 4,
    name: "Mohd Shami",
    cpf: "713.166.090-65",
    email: "shami@gmail.com",
    phone: "7896547896",
    birth_date: "31/10/1997",
    salary: "2.300",
    created_at: "14/05/2022",
  },
  {
    id: 4,
    name: "Mohd Shami",
    cpf: "713.166.090-65",
    email: "shami@gmail.com",
    phone: "7896547896",
    birth_date: "31/10/1997",
    salary: "2.300",
    created_at: "14/05/2022",
  },
];

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
  const [employ, setEmploy] = useState();

  const classes = useStyles();

  // useEffect(() => {
  //   listFindEmploye();
  // }, []);

  // const listFindEmploye = async () => {
  //   let response = await employeeService.findEmplooyers();
  //   setEmploy(response.data);
  // };

  // const deleteEmployee = async (id: any) => {
  //   await employeeService.deleteEmplooyer(id);
  //   listFindEmploye();
  // };

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
        {emplooyer.map((item: any) => (
          <TRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.cpf}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>{item.birth_date}</TableCell>
            <TableCell>{item.salary}</TableCell>
            <TableCell>{item.created_at}</TableCell>

            <TableCell>
              <Button
                color="primary"
                variant="contained"
                style={{ marginRight: 10 }}
              >
                <Edit fontSize="large" />
              </Button>
              <Button
                color="secondary"
                variant="contained"
                // onClick={() => deleteEmployee(employee.id)}
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
