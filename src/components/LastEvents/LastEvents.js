import { Card, Item, Image, Dimmer, Loader, Button, CardHeader, Icon } from "semantic-ui-react";
import './LastEvents.scss';

export default function LastEvents({ lastEventsFetch }) {
  console.log(lastEventsFetch);
  const { loading, result } = lastEventsFetch;

  if (loading || !result)
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading ... </Loader>
      </Dimmer>
    );

    const {results} = result.data; 
    console.log(results);
  return results.map((characterEvent, index) => (
    <Card key={index} className="last-event">
        <Image src={`${characterEvent.thumbnail.path}.${characterEvent.thumbnail.extension}`}
        wrapped ui={false} />
    <Card.Content>
        <Card.Header>{characterEvent.title}</Card.Header>
        <Card.Meta><span><Icon name="book" />{characterEvent.comics.available} Comics</span></Card.Meta>
        <Card.Description>{characterEvent.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Button animated fluid as="a" href={characterEvent.urls[0].url} target="_blank" color="black">
        <Button.Content visible>See event</Button.Content>
        <Button.Content hidden>
            <Icon name="arrow right" />
        </Button.Content>
        </Button>
    </Card.Content>
    </Card>
  ));
}