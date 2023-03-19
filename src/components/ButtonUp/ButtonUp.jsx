import { Icon, Button } from './ButtonUp.styled';

export const ButtonUp = () => {
  const handleClick = () => {
    if (window.pageYOffset > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Button type="button" onClick={handleClick}>
      <Icon />
    </Button>
  );
};
