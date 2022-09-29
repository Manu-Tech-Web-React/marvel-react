import {
  Card,
  Image,
  Dimmer,
  Loader,
  Button,
  Icon,
} from "semantic-ui-react";
import "./ListComics.scss";

export default function ListComics({ listComics, renderComics, setRenderComics }) {
  const { loading, result } = listComics;

  if (loading || !result)
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading ... </Loader>
      </Dimmer>
    );

  const { results } = result.data;
  console.log(results);

  const loadMoreComics = () => {
    const numberComics = renderComics;
    setRenderComics(numberComics + 5);
  };

  return (
    <Card.Group itemsPerRow={5}>
      {results.map((upshot, index) => (
        <Card key={index} className="list-comics">
          <Image
            src={`${upshot.images[0].path}.${upshot.images[0].extension}`}
            wrapped
            alt={upshot.title}
            ui={false}
          />
          <Card.Content>
            <Card.Header>{upshot.title}</Card.Header>
            <Card.Meta>
              <span>Digital ID: {upshot.id}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <Button
              animated
              fluid
              as="a"
              href={upshot.urls[0].url}
              target="_blank"
              color="black"
            >
              <Button.Content visible>More Information ...</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Card.Content>
        </Card>
      ))}
      <div className="container-button">
        <Button color="red" onClick={() => loadMoreComics()}>
          <Icon name="plus" />
          Load More Comics
        </Button>
      </div>
    </Card.Group>
  );
}
