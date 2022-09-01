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
  id: number;
  name: string;
  label: number;
  type: string;
  value: string | number;
};

export type ButtonType = {
  children: React.ReactNode;
};

export interface IdType {
  id: number;
}
