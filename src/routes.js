import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './scenes/Gallery';
import About from './scenes/About';
import Contact from './scenes/Contact';

export const routes = {
  gallery: {
    path: "/",
    displayName: "gallery"
  },
  about: {
    path: "/about",
    displayName: "about"
  },
  contact: {
    path: "/contact",
    displayName: "contact"
  }
}


export default function() {
  return(
    <div>
      <Router>
        <Switch>
          <Route path={routes.contact.path} component={Contact} />
          <Route path={routes.about.path} component={About} />
          <Route path={routes.gallery.path} component={Gallery} />
        </Switch>
      </Router>
    </div>
  );
}
