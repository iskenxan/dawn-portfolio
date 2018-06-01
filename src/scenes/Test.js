import React, { Component } from 'react';
import jsonData from "../test.json"
class Test extends Component {

  render() {
    return (
      <div>
        {jsonData.text}
      </div>
    );
  }

}

export default Test;
