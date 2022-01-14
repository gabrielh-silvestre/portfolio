import tw from 'tailwind-styled-components';

export const Container = tw.section`
  max-w-3xl

  mx-auto
  mt-20

  flex
  flex-col
  justify-around
  items-center
`;

export const Title = tw.h2`
  pb-6

  text-white
  text-3xl
  font-DM
  font-bold
`;

export const Description = tw.p`
  text-gray
  text-lg
  text-center
  font-DM
`;
