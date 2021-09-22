export type TExtensibleValuesFormData = {
  value: string;
  field: string;
};

export type TExtensibleValuesFormProps = {
  callback: () => void;
};

export type TChatFormData = {
  text: string;
};

export type TChatFormProps = {
  callback: (text: string) => void;
};
