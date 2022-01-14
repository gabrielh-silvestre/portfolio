import tw from 'tailwind-styled-components';

export const Container = tw.section`
  flex
  justify-between

  pt-16
`;

export const GreetingsContainer = tw.div`
  last:pb-0
`;

export const GreetingsTitle = tw.h1`
  pb-6

  text-4xl
  font-bold
`;

export const GreetingsParagraph = tw.p`
  pb-6

  text-gray
  text-lg
  font-medium
`;
