interface Props {
  children: React.ReactNode;
}

export const Articles = ({ children }: Props): React.JSX.Element => {
  return <div className="flex flex-col gap-24 mobile:gap-32">{children}</div>;
};
