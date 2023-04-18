import { ChangeEvent, forwardRef } from 'react';

export type Props = {
  defaultValue?: string;
  name?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

const Input = forwardRef(
  function Input({ defaultValue, name, onChange, placeholder }: Props, ref: React.Ref<HTMLInputElement>) {
    const selfOnChange = onChange
      ? (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)
      : undefined;
  
    return (
      <input
        ref={ref}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={selfOnChange}
      />
    );
  });

export default Input;
