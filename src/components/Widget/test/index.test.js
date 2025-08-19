import { Provider } from 'react-redux';
import assetMock from '../../../../mocks/fileMock';
import { createMockStore } from '../../../utils/store';
import WidgetLayout from '../layout';
import Widget from '../index';
import { act, render } from '@testing-library/react';

jest.mock('../layout');

const mockStore = createMockStore();

describe('<Widget />', () => {
  const profile = assetMock;
  const handleUserMessage = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render WidgetLayout', () => {
    render(
      <Provider store={mockStore}>
        <Widget handleNewUserMessage={handleUserMessage} profileAvatar={profile} />
      </Provider>
    );

    expect(WidgetLayout).toHaveBeenCalledTimes(1);
  });

  it('should call the handleUserMessage callback when a new message is received', () => {
    render(
      <Provider store={mockStore}>
        <Widget handleNewUserMessage={handleUserMessage} profileAvatar={profile} />
      </Provider>
    );

    const { onSendMessage } = WidgetLayout.mock.calls[0][0];

    act(() => onSendMessage('New message'));

    expect(handleUserMessage).toBeCalled();
  });
});
