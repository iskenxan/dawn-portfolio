import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './scenes/Gallery';
import About from './scenes/About';
import Contact from './scenes/Contact';

export default function() {
  return(
    <div>
      <Router>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/" component={Gallery} />
        </Switch>
      </Router>
    </div>
  );
}
