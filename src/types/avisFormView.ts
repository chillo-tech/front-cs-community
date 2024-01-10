export type AvisFormViewType = {
  title: string;
  desc: string;
  bottom: string;
  fields: {
    name: string;
    fieldType: string;
    label: string;
    placeholder: string;
    choices: string[];
  }[];
};
