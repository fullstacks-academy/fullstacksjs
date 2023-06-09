interface Props {
  id?: string;
  children: React.ReactNode;
}

export const SectionHeader = ({ id, children }: Props): React.JSX.Element => {
  return (
    <h2 id={id} className="h2 text-2xl font-bold">
      {children}
    </h2>
  );
};
