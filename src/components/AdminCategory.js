import React from 'react';
import { Col, Row } from 'reactstrap';

export default function(props){

  function getItems() {
    const { imageGroups } = props;
    return imageGroups.map(group => {
        const image = require("../media/photos/" + group.front);
        return (
            <img src={image} className="w-100 border-primary border-left border-right" />
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
