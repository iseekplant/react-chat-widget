import React from 'react';
import { Provider } from 'react-redux';
import {
  createNewMessage,
  createLinkSnippet,
  createComponentMessage
} from '../../../../../../../utils/messages';
import { createMockStore } from '../../../../../../../utils/store';
import Messages from '../index';
import Message from '../components/Message';
import Snippet from '../components/Snippet';
import { render } from '@testing-library/react';

jest.mock('../components/Message');
jest.mock('../components/Snippet');

describe('<Messages />', () => {
  const Dummy = jest.fn(({ text }) => <div>{text}</div>);
  const customComp = createComponentMessage(Dummy, { text: 'This is a Dummy Component!' });
  const message = createNewMessage('Response message 1');
  const linkSnippet = createLinkSnippet({ title: 'link', link: 'link' });
  const mockStore = createMockStore({
    messages: { messages: [message, linkSnippet, customComp], badgeCount: 0 }
  });

  beforeEach(() => {
    render(
      <Provider store={mockStore}>
        <Messages />
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render a Message component', () => {
    expect(Message).toHaveBeenCalledTimes(1);
  });

  it('should render a Snippet component', () => {
    expect(Snippet).toHaveBeenCalledTimes(1);
  });

  it('should render a custom component', () => {
    expect(Dummy).toHaveBeenCalledTimes(1);
  });
});
