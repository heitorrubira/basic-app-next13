import {
  Text,
  Input,
} from '../basic';

export type Props = {
  label: string;
  name?: string;
  defaultValue?: string;
};

const InputForm = ({ label, name, defaultValue }: Props) => {
  return (
    <div>
      <Text>{label}</Text>
      <Input placeholder={label} name={name} defaultValue={defaultValue} />
    </div>
  );
};

export default InputForm;