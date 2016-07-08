import React from 'react';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();

export default function Layout({ children }) {
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <div>
          <Toolbar>
            <ToolbarTitle text="Github Favorites" />
          </Toolbar>
          {children}
        </div>
      </Provider>
    </MuiThemeProvider>
  );
}

Layout.propTypes = {
  children: React.PropTypes.node
};
