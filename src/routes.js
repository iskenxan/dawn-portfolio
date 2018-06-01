import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './scenes/Gallery';
import About from './scenes/About';
import Contact from './scenes/Contact';
import Admin from './scenes/Admin';
import PrivateRoute from './components/PrivateRoute'
import Login from './scenes/Login'
import Error from './scenes/Error';
import Test from './scenes/Test';


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
    path: "/gallery/advertisement",
    displayName: "advertisement"
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
          <Route path="/test" component={Test} />
          <PrivateRoute path="/admin" renderComponent={Admin} {...props} />
          <Route path="/" component={Gallery} />
        </Switch>
      </Router>
    </div>
  );
}
