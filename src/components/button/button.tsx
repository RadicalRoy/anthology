import type { ComponentProps } from 'react';

export type ButtonProps = ComponentProps<'button'> & {
  variant: 'primary' | 'secondary' | 'destructive';
};

export const Button = (props: ButtonProps) => {
  return <button {...props} />;
};
