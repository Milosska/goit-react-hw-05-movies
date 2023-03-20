import {
  Container,
  CompanyLogo,
  LogoPlaceholder,
} from './CompaniesInfo.styled';

export const CompaniesInfo = ({ companies }) => {
  const getLogo = (logo, name) =>
    logo ? (
      <CompanyLogo
        src={`https://image.tmdb.org/t/p/original/${logo}`}
        alt={name}
      />
    ) : (
      <LogoPlaceholder />
    );
  return (
    <Container>
      {companies.map(({ logo_path, name, id }) => {
        return (
          <div key={id}>
            {getLogo(logo_path)}
            <p>{name}</p>
          </div>
        );
      })}
    </Container>
  );
};
