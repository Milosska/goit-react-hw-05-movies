import {
  Backdrop,
  Thumb,
  Icon,
  TextThumb,
  Text,
  Spinner,
  SpinnerDot,
} from './Loader.styled';

export const Loader = () => {
  return (
    <Backdrop>
      <Thumb>
        <Icon />
        <TextThumb>
          <Text>Loading</Text>
          <Spinner>
            <SpinnerDot />
            <SpinnerDot />
            <SpinnerDot />
          </Spinner>
        </TextThumb>
      </Thumb>
    </Backdrop>
  );
};
