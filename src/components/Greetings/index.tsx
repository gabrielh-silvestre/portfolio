import { UniverseCell } from '../../icons/UniverseCell';
import { ButtonContact } from '../ButtonContact';
import { ButtonCV } from '../ButtonCV';
import { Container, GreetingsParagraph, GreetingsTitle } from './styles';

export function Greetings() {
  return (
    <Container>
      <div>
        <GreetingsTitle>
          Hey, I am the<br />
          Gabriel Silvestre ;)
        </GreetingsTitle>
        <GreetingsParagraph>
          Front-End Developer & Future Full-Stack
        </GreetingsParagraph>

        <div>
          <ButtonCV />
          <ButtonContact />
        </div>
      </div>

      <UniverseCell />
    </Container>
  );
}
