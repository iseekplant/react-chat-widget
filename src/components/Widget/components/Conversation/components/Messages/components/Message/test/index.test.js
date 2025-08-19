import { createNewMessage } from '../../../../../../../../../utils/messages';
import Message from '../index';
import { render } from '@testing-library/react';

describe('<Message />', () => {
  it('should render a <strong> element', () => {
    const { container } = render(<Message message={createNewMessage('New message with **Markdown**!')} />);

    expect(container.querySelector('.rcw-message-text').innerHTML).toMatchSnapshot();
  });

  it('should render a <em> element', () => {
    const { container } = render(<Message message={createNewMessage('New message with *Markdown*!')} />);

    expect(container.querySelector('.rcw-message-text').innerHTML).toMatchSnapshot();
  });
});
