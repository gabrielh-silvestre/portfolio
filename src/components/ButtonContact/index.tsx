import tw from 'tailwind-styled-components';

const Button = tw.button`
  mr-2
  px-7
  py-3

  text-sm
  font-medium

  border
  border-gray-200
`;

export function ButtonContact() {
  return (
    <Button
      type="button"
    >
      Contact me
    </Button>
  );
}
