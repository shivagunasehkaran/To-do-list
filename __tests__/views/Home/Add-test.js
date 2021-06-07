import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import {mockStore} from '../../../src/store/__mocks__/store';
import ConnectedAdd from '../../../src/views/Add/Add';

enzyme.configure({adapter: new Adapter()});

const defaultStore = {
  network: {isConnected: true},
};

describe('ConnectedAdd screen: Snapshot Testing', () => {
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
          <ConnectedAdd />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ConnectedAdd render values and components', () => {
  it('renders correctly with default', async () => {
    const store = mockStore({
      ...defaultStore,
      navigation: {navigate: jest.fn()},
      todo: {
        todoDetails: {
          title: 'test',
          description: 'test',
        },
      },
    });

    const navigateSpy = jest.mock('@react-navigation/native', () => {
      return {
        useNavigation: () => ({goBack: jest.fn()}),
        useRoute: jest.fn(),
      };
    });

    const saveTodoDetailsMock = jest.fn();

    const wrapper = shallow(
      <Provider store={store}>
        <ConnectedAdd store={store} saveTodoDetails={saveTodoDetailsMock} />
      </Provider>,
    );
    const screen = wrapper.find('Add');
    const actionScreen = screen
      .findWhere(node => node.prop('testID') === 'addAction')
      .at(0);
    actionScreen
      .findWhere(node => node.prop('testID') === 'addAction')
      .at(0)
      .simulate('click');
    expect(navigateSpy).toHaveBeenCalledTimes(1);
  });
});
