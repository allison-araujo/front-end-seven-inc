import { TextField } from "@mui/material";

import { FormsValues } from "../../ts/types";

const InputField = (values: FormsValues) => {
  return (
    <TextField
      variant="outlined"
      label={values.label}
      name={values.name}
      value={values.value}
      onChange={values.onChange}
      type={values.type}
      required
    />
  );
};

export default InputField;
