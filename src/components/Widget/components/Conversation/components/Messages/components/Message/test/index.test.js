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

  it('should render the timestamp when given', () => {
    const { container } = render(
      <Message
        message={createNewMessage('some message', 'sender', '1', new Date('2025', '1', '1', '10', '30'))}
        showTimeStamp={true}
      />
    );

    expect(container.querySelector('.rcw-timestamp').innerHTML).toEqual('10:30');
  });
});
