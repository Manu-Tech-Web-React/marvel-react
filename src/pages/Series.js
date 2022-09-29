import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListSeries from "../components/ListSeries";
import useFetch from "../hooks/useFetch";

export default function Series() {
  const listSeries = useFetch(
    `${process.env.REACT_APP_BASE_URL}/series?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startYear&limit=20`
  );

  console.log(listSeries);

  return (
    <div>
      <div className="series-page">
        <div id="slide-series-image" />
        <Grid>
          <Grid.Column>
            <Container bg="light">
              <Header as="h2">The latest Marvel series</Header>
              <ListSeries listSeries={listSeries} />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}
