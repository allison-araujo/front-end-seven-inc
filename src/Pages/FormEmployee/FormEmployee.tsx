import { Grid } from "@material-ui/core";
import { useState } from "react";
import Form from "../../components/Form/Form";
import InputField from "../../components/InputField/InputField";
import * as employeeService from "../../services/api";
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

  const handleInputChange = (e: any) => {
    setEmplooyer({ ...emplooyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    employeeService.createEmployer(emplooyer);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <InputField
            name="name"
            label="Nome"
            value={emplooyer.name}
            onChange={handleInputChange}
            id={0}
            type={""}
          />
          <InputField
            label="cpf"
            name="cpf"
            value={emplooyer.cpf}
            onChange={handleInputChange}
            id={0}
            type={""}
          />
          <InputField
            label="Email"
            name="email"
            value={emplooyer.email}
            onChange={handleInputChange}
            id={0}
            type={""}
          />
          <InputField
            label="Telefone"
            name="phone"
            value={emplooyer.phone}
            onChange={handleInputChange}
            id={0}
            type={""}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            label="Data de Nascimento"
            name="birth"
            value={emplooyer.birth_date}
            onChange={handleInputChange}
            id={0}
            type={""}
          />

          <InputField
            label="Salario"
            name="salary"
            value={emplooyer.salary}
            onChange={handleInputChange}
            id={0}
            type={""}
          />

          <InputField
            label="Data de Contratação"
            name="create_at"
            value={emplooyer.created_at}
            onChange={handleInputChange}
            id={0}
            type={""}
          />

          <div>
            <button type="submit" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default FormEmployee;
