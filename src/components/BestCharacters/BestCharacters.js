import { Header, Button, Grid, Image, GridColumn } from "semantic-ui-react";
import Container from "../Container";
import marvelImage from "../../img/marvel.png";
import './BestCharacters.scss';

export default function BestCharacters() {
  return (
    <Container>
      <div className="best-characters">
        <Grid columns={2} divided="vertically">
          <Grid.Column>
            <Header as="h1">Best Characters of Marvel's World</Header>
            <Header as="h3">Enjoy the best content that you can imaging</Header>
            <Button>Check the all Characters</Button>
          </Grid.Column>
          <Grid.Column className="image-container">
            <Image src={marvelImage} alt="Marvel App" />
          </Grid.Column>
        </Grid>
      </div>
    </Container>
  );
}
