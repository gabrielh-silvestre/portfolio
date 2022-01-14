import { Greetings } from '../Greetings';
import { PersonalResume } from '../PersonalResume';
import { Container, ContentContainer } from './styles';

export function About() {
  return (
    <Container>
      <ContentContainer>
        <Greetings />
        <PersonalResume />
      </ContentContainer>
    </Container>
  );
}
