import { forwardRef, PropsWithChildren, } from 'react';

export type Props = PropsWithChildren<{}>;

const Button = forwardRef(
  function Button({ children }: Props, ref: React.Ref<HTMLButtonElement>) {
    return (
      <button ref={ref}>
        {children}
      </button>
    );
  });

export default Button;
