import { Button } from "@mui/material";

const ButtonStyles = (props: any) => {
  const { text, color, type, variant, onClick, ...rest } = props;

  return (
    <Button
      type={type || "content"}
      variant={variant || "contained"}
      color={color || "primary"}
      onClick={onClick}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default ButtonStyles;
