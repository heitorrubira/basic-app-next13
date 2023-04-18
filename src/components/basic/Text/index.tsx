import { forwardRef, PropsWithChildren, } from 'react';

export type Props = PropsWithChildren<{}>;

const Text = forwardRef(
  function Text({ children }: Props, ref: React.Ref<HTMLParagraphElement>) {
    return (
      <p ref={ref}>{children}</p>
    );
  });

export default Text;
