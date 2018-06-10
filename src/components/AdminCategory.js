import React from 'react';
import { Col, Row, CardImgOverlay, CardImg, Card, CardText, CardTitle, Button } from 'reactstrap';

export default function(props){

  function getItems() {
    const { imageGroups } = props;
    return imageGroups.map(group => {
        const image = require("../media/photos/" + group.front);
        return (
          <Card>
            <CardImg src={image} className="w-100 border-primary border-left border-right" />
            <CardImgOverlay>
              <Row className="h-100">
                  <Button className="m-auto px-4" outline color="primary">Edit</Button>
              </Row>
            </CardImgOverlay>
          </Card>
        );
    });
  }


  return(
    <Col className="bg-light px-3" xs={3}>
      <h3 className="text-center text-secondary"><u>{props.title}</u></h3>
      {getItems()}
    </Col>
  );
}
