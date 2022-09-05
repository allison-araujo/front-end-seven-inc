import { Grid } from "@material-ui/core";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import InputField from "../../components/InputField/InputField";
import { createEmployer } from "../../services/api";
import { Employee } from "../../ts/types";

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

const FormEmployee = () => {
  const [emplooyer, setEmplooyer] = useState(initialValue);

  const { name, cpf, email, phone, birth_date, salary, created_at } = emplooyer;
  let navigate = useNavigate();

  const addEmployees = async () => {
    await createEmployer(emplooyer);
    navigate("/employee");
  };

  const handleInputChange = (e: any) => {
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
            onChange={handleInputChange}
            type="text"
          />
          <InputField
            label="cpf"
            name="cpf"
            value={cpf}
            onChange={handleInputChange}
            type="text"
          />
          <InputField
            label="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
            type="text"
          />
          <InputField
            label="Telefone"
            name="phone"
            value={phone}
            onChange={handleInputChange}
            type="text"
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            name="birth_date"
            label=""
            value={birth_date}
            onChange={handleInputChange}
            type="date"
          />

          <InputField
            label="Salario"
            name="salary"
            value={salary}
            onChange={handleInputChange}
            type="text"
          />

          <InputField
            label=""
            name="created_at"
            value={created_at}
            onChange={handleInputChange}
            type="date"
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => addEmployees()}
          >
            Adicionar Funcionarios
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default FormEmployee;
