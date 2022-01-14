import { Container, ContentContainer, NavBar, NavItem, Title } from './styles';

export function Header() {
  return (
    <Container>
      <ContentContainer>
        <Title>G. Silvestre Portfolio</Title>

        <NavBar>
          <NavItem href="#">About me</NavItem>
          <NavItem href="#">Projects</NavItem>
          <NavItem href="#">My Skills</NavItem>
        </NavBar>
      </ContentContainer>
    </Container>
  );
}
