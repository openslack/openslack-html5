import React from 'react';
import {
  Container,
  List,
  NavBar,
  Group,
  View,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

const Index = React.createClass({
  getDefaultProps() {
    return {
      transition: 'rfr',
    };
  },

  renderItems() {
    const pages = [
      'Page1',
      'Page2',
      'About',
    ];

    return pages.map((item, index) => {
      return (
        <List.Item
          linkComponent={Link}
          linkProps={{to: `/${item.toLowerCase()}`}}
          title={item}
          key={index}
        />
      );
    });
  },

  render() {
    return (
      <View>
        <NavBar
          amStyle="primary"
          title="看板"
        />
        <Container scrollable>
          <Group
            header="监控工具集"
            noPadded
          >
            <List>
              {this.renderItems()}
            </List>
          </Group>
        </Container>
      </View>
    );
  },
});

export default Index;
