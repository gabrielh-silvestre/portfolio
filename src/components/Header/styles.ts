import tw from 'tailwind-styled-components';

export const Container = tw.header`
  py-4

  text-white
  font-DM

  bg-gray-400
`;

export const ContentContainer = tw.div`
  container

  flex
  justify-between
`;

export const Title = tw.h2`
  text-2xl
  font-bold
`;

export const NavBar = tw.nav`
  flex
`;

export const NavItem = tw.a`
  pr-10

  text-lg

  last-of-type:pr-0
`;
