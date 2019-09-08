import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import {Home, CategoryDetail} from '../../Screens';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="Main" hideNavBar>
        <Scene key="Home" component={Home} initial />
        <Scene key="CategoryDetail" component={CategoryDetail} />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
