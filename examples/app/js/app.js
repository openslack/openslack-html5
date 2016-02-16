import React from 'react';
import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  Link,
  IndexRoute,
} from 'react-router';
import {
  Container,
  Group,
  NavBar,
  TabBar,
  View,
} from 'amazeui-touch';


// Pages
import Index from './pages/Index';
import Page from './pages/Page';

const App = React.createClass({
  render() {
    const {
      location,
      params,
      children,
      ...props
      } = this.props;
    const transition = children.props.transition || 'sfr';

    return (
      <Container direction="column" id="sk-container">
        <Container
          transition={transition}
        >
          {React.cloneElement(children, {key: location.key})}
        </Container>

        <TabBar
          amStyle="primary"
        >
          <TabBar.Item
            component={Link}
            icon="home"
            title=""
            selected={!params.page}
            to="/"
          />
          <TabBar.Item
            component={Link}
            icon="gear"
            title=""
            badge="404"
            selected={params.page === 'system'}
            to="/system"
          />
          <TabBar.Item
            component={Link}
            icon="list"
            title=""
            selected={params.page === 'dashboard'}
            to="/dashboard"
          />
          <TabBar.Item
            component={Link}
            icon="person"
            title=""
            selected={params.page === 'about'}
            to="/about"
          />
        </TabBar>
      </Container>
    );
  }
});

const routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path=":page" component={Page} />
      <Route path="/page1" component={Page} />
      <Route path="/page2" component={Page} />
      <Route path="/system" component={Page} />
      <Route path="/dashboard" component={Page} />

    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
