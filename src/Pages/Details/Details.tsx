import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsEmployee from "../../components/DetailsEmployee/DetailsEmployee";
import * as employeeService from "../../services/api";

const Details = () => {
  const [values, setValues] = useState([] as any);
  const { id: employeeID } = useParams();
  const [data, setData] = useState<AxiosResponse | null>(null);

  useEffect(() => {
    try {
      //   setLoading(true);
      employeeService.findEmplooyersDetails(employeeID).then(res => {
        if (res) {
          setValues(res.data);
          console.log("res aqui", res);
          setData(data?.data);
          console.log("data aqui", data?.data);

          console.log("details do employ", res);

          //   setLoading(false);
        }
      });
    } catch (error) {
      alert("Nao foi possivel buscar Pessoa");
    }
  }, [employeeID]);

  return (
    <DetailsEmployee
      name={values.name}
      cpf={values.cpf}
      email={values.email}
      phone={values.phone}
      birth_date={values.birth_date}
      salary={values.salary}
      key={values.id}
      created_at={values.created_at}
      id={values.id}
    />
  );
};

export default Details;
