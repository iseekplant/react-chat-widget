import { configure, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import assetMock from '../../../../mocks/fileMock';
import { createMockStore } from '../../../utils/store';
import WidgetLayout from '../layout';
import Widget from '../index';

configure({ adapter: new Adapter() });

const mockStore = createMockStore();

describe('<Widget />', () => {
  const profile = assetMock;
  const handleUserMessage = jest.fn();

  const widgetComponent = mount(
    <Provider store={mockStore}>
      <Widget handleNewUserMessage={handleUserMessage} profileAvatar={profile} />
    </Provider>
  );

  it('should render WidgetLayout', () => {
    expect(widgetComponent.find(WidgetLayout)).toHaveLength(1);
  });

  it('should call the handleUserMessage callback when a new message is received', () => {
    widgetComponent.find(WidgetLayout).prop('onSendMessage')('New message');

    expect(handleUserMessage).toBeCalled();
  });
});
