import React from 'react';
import {
  Container,
  Group,
} from 'amazeui-touch';

const NotFound = React.createClass({
  render() {
    return (
      <Container {...this.props}>
        <Group>
          <h2>Oops, Not Found.</h2>
        </Group>
      </Container>
    );
  }
});

export default NotFound;
