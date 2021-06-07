import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import {mockStore} from '../../../src/store/__mocks__/store';
import ConnectedHome from '../../../src/views/Home/Home';

enzyme.configure({adapter: new Adapter()});

const defaultStore = {
  network: {isConnected: true},
};

describe('Home screen: Snapshot Testing', () => {
  it('renders correctly when success callback with all the required params in response', async () => {
    const data = {
      title: 'shiva',
      description: 'test',
    };
    const store = mockStore({
      ...defaultStore,
      todo: {
        todoDetails: {
          title: 'test',
          description: 'test',
        },
      },
      todoData: {data: data},
    });

    const tree = renderer
      .create(
        <Provider store={store}>
          <ConnectedHome />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
