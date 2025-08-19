import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Launcher from '../index';
import Badge from '../components/Badge';
import { fireEvent, render } from '@testing-library/react';

const mockStore = configureMockStore();

jest.mock('../components/Badge');

describe('<Launcher />', () => {
  it('should call toggle prop when clicked', () => {
    const toggle = jest.fn();
    const chatOpened = false;
    const launcherComponent = renderLauncher({ toggle, chatOpened });

    fireEvent.click(launcherComponent.container.querySelector('.rcw-launcher'));

    expect(toggle).toBeCalled();
  });

  it('should render the open-launcher image when chatOpened = false', () => {
    const toggle = jest.fn();
    const chatOpened = false;

    const launcherComponent = renderLauncher({ toggle, chatOpened });

    expect(launcherComponent.container.querySelector('.rcw-open-launcher')).not.toBeNull();
  });

  it('should render the close-launcher image when chatOpened = true', () => {
    const toggle = jest.fn();
    const chatOpened = true;

    const launcherComponent = renderLauncher({ toggle, chatOpened });

    expect(launcherComponent.container.querySelector('.rcw-close-launcher')).not.toBeNull();
  });

  it('should render Badge component when closed and new message is in', () => {
    const toggle = jest.fn();
    const chatOpened = false;
    const badgeValue = 1;

    renderLauncher({ toggle, chatOpened, badge: badgeValue });

    const { badge } = Badge.mock.calls[0][0];

    expect(badge).toBe(badgeValue);
  });
});

const renderLauncher = ({ toggle, chatOpened, badge = 0 }) => {
  const store = mockStore({
    behavior: { showChat: chatOpened },
    messages: { badgeCount: badge }
  });

  return render(
    <Provider store={store}>
      <Launcher toggle={toggle} showBadge={badge > 0} />
    </Provider>
  );
};