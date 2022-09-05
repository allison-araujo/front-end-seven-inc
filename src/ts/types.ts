export type Employee = {
  id: number | string;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  birth_date: string;
  salary: string;
  created_at: string;
};

export type FormsValues = {
  id?: string | number;
  name: string;
  label?: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type Button = {
  children: React.ReactNode;
};

export interface IdType {
  id: number | string;
}

export type ButtonType = {
  text: string;
  size: number | string;
  color: string;
  type: string;
  variant: string;

  onClick: (e: React.MouseEventHandler<HTMLInputElement>) => void;
};

export type DateType = {
  name: string;
  label: string;
  value: string;
  date: Date;
};

export interface IPageHeaderProps {
  title?: string;
  subTitle?: string;
  icon?: any;
}
