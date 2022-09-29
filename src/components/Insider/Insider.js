import { Grid, Header, Image, Button } from "semantic-ui-react";
import ImageInsider from "../../img/insider.jpeg";
import "./Insider.scss";

export default function Insider() {
  return (
    <div className="container-insider">
      <Grid container columns="2">
        <Grid.Column>
          <Image src={ImageInsider} alt="Image Insider" />
        </Grid.Column>
        <Grid.Column>
          <Header size="large" color="red" as="h1">
            Look, Win y Redeem
          </Header>
          <Header size="large" as="h3">
            Get a score doing what you like the most
          </Header>
          <div className="container-insider-content-button">
            <Button>Join right now.</Button>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}
