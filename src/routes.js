import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './scenes/Gallery';
import About from './scenes/About';
import Contact from './scenes/Contact';
import PrivateRoute from './components/PrivateRoute'
import Login from './scenes/Login'
import Error from './scenes/Error';
import Landing from './scenes/Landing';


export const galleryRoutes = {
  fashion: {
    path: "/gallery/fashion",
    displayName: "fashion"
  },
  portraits: {
    path: "/gallery/portraits",
    displayName: "portraits"
  },
  advertisement: {
    path: "/gallery/still-life",
    displayName: "still life"
  }
}

export const routes = {
  about: {
    path: "/about",
    displayName: "about"
  },
  contact: {
    path: "/contact",
    displayName: "contact"
  }
}


export default function(props) {
  return(
    <div>
      <Router>
        <Switch>
          <Route path={routes.contact.path} component={Contact} />
          <Route path={routes.about.path} component={About} />
          <Route path="/login" component={Login} />
          <Route path="/error" component={Error} />
          <Route path="/gallery" component={Gallery}  />
          <Route path="/" component={Landing}  />
        </Switch>
      </Router>
    </div>
  );
}
