import { SectionHeader } from './SectionHeader';

interface Props {
  children: React.ReactNode;
  title: string;
  id?: string;
}

export const Article = ({ children, id, title }: Props): React.JSX.Element => {
  return (
    <article className="flex w-full flex-col gap-8">
      <SectionHeader id={id}>{title}</SectionHeader>
      {children}
    </article>
  );
};
