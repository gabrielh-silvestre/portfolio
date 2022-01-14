import { Greetings } from '../Greetings';
import { Container, ContentContainer } from './styles';

export function About() {
  return (
    <Container>
      <ContentContainer>
        <Greetings />
      </ContentContainer>
    </Container>
  );
}
