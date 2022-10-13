import { Grid } from "@material-ui/core";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form/Form";
import InputField from "../../components/InputField/InputField";
import {
  editEmplooyer,
  findEmplooyersDetails,
} from "../../services/serviceEmployee";

import { Employee } from "../../ts/types";

interface IdType {
  id: number;
}

const initialValue: Employee = {
  id: 0,
  name: "",
  cpf: "",
  email: "",
  phone: "",
  birth_date: "",
  salary: "",
  created_at: "",
};

const EditFormEmployee = () => {
  const [emplooyer, setEmplooyer] = useState(initialValue);
  const { name, cpf, email, phone, birth_date, salary, created_at } = emplooyer;

  const { id }: any = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    getFindEmplooyes();
  }, []);

  const getFindEmplooyes = async () => {
    const response = await findEmplooyersDetails(id);
    setEmplooyer(response?.data);
  };

  const editEmployeers = async () => {
    const response = await editEmplooyer(id, emplooyer);
    navigate("/employee");
  };

  const valueChange = (e: any) => {
    console.log(e.target.value);
    setEmplooyer({ ...emplooyer, [e.target.name]: e.target.value });
  };

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <InputField
            name="name"
            label="Nome"
            value={name}
            onChange={valueChange}
            type={""}
          />
          <InputField
            label="cpf"
            name="cpf"
            value={cpf}
            onChange={valueChange}
            type={""}
          />
          <InputField
            label="Email"
            name="email"
            value={email}
            onChange={valueChange}
            type={""}
          />
          <InputField
            label="Telefone"
            name="phone"
            value={phone}
            onChange={valueChange}
            type={""}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            label="Data de Nascimento"
            name="birth"
            value={birth_date}
            onChange={valueChange}
            type={""}
          />

          <InputField
            label="Salario"
            name="salary"
            value={salary}
            onChange={valueChange}
            type={""}
          />

          <InputField
            label="Data de Contratação"
            name="create_at"
            value={created_at}
            onChange={valueChange}
            type={""}
          />

          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => editEmployeers()}
            >
              Confirmar
            </Button>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EditFormEmployee;
