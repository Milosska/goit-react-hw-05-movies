import { CompanyLogo } from './CompaniesInfo.styled';

export const CompaniesInfo = ({ companies }) => {
  return (
    <div>
      {companies.map(({ logo_path, name }) => {
        return (
          <>
            <CompanyLogo
              src={`https://image.tmdb.org/t/p/original/${logo_path}`}
              alt={name}
            />
            <p>{name}</p>
          </>
        );
      })}
    </div>
  );
};
