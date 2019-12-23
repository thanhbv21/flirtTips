import React, { Fragment } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import store from './src/store';
import Home from './src/screens/Home';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {
  mapping,
  light as theme,
} from '@eva-design/eva';

const RootNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

let Navigation = createAppContainer(RootNavigator);

export default class App extends React.Component {
  // componentDidMount() {
  //   SplashScreen.hide();
  // }

  render() {
    return (
      <Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={theme}>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </ApplicationProvider>
      </Fragment >
    );
  }
}