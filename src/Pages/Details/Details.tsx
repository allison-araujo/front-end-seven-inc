import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsEmployee from "../../components/DetailsEmployee/DetailsEmployee";
import * as employeeService from "../../services/serviceEmployee";

const Details = () => {
  const [values, setValues] = useState([] as any);
  const { id }: any = useParams();
  const [loading, setLoading] = useState();

  const [data, setData] = useState<AxiosResponse | null>(null);

  useEffect(() => {
    try {
      //   setLoading(true);
      employeeService.findEmplooyersDetails(id).then(res => {
        if (res) {
          setValues(res.data);
          setData(data?.data);

          //   setLoading(false);
        }
      });
    } catch (error) {
      alert("Nao foi possivel buscar Pessoa");
    }
  }, [id]);

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
