import { Navs } from './Navs';

export const Header = (): React.JSX.Element => {
  return (
    <div className="flex items-center justify-between">
      <Navs />
      {/* <div className="flex items-center gap-16">
        <Authentication client:load language={i18next.language} />
      </div> */}
    </div>
  );
};
