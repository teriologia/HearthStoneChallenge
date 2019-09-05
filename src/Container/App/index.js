import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import {Home} from '../../Screens';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="Main" hideNavBar>
        <Scene key="Login" component={Home} initial />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
