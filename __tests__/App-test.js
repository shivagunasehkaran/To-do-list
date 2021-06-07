/**
 * @format
 */
import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {mockStore} from '../src/store/__mocks__/store';

enzyme.configure({adapter: new Adapter()});

const defaultStore = {
  network: {isConnected: true},
};

const store = mockStore({
  ...defaultStore,
});

it('renders correctly', async () => {
  let snapshot;
  snapshot = shallow(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  await new Promise(resolve => setTimeout(resolve, 100));
  expect(snapshot).toMatchSnapshot();
});
