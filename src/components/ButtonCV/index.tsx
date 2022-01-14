import tw from 'tailwind-styled-components';

const Button = tw.button`
  mr-2
  px-7
  py-3

  text-dark
  text-sm
  font-medium

  bg-light-purple
`;

export function ButtonCV() {
  return (
    <Button
      type="button"
    >
      Download CV
    </Button>
  );
}
