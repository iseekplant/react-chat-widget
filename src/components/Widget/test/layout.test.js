import { Provider } from 'react-redux';
import { createMockStore } from '../../../utils/store';
import { render } from '@testing-library/react';
import WidgetLayout from '../layout';

const mockStore = createMockStore();

describe('<WidgetLayout />', () => {
  beforeEach(() => {
    document.body.setAttribute('style', '');
  });

  it('sets an overflow style on the body', () => {
    render(
      <Provider store={mockStore}>
        <WidgetLayout />
      </Provider>
    );

    expect(document.body.getAttribute('style')).toBe('overflow: auto');
  });

  it('sets a hidden overflow style on the body when preview is visible', () => {
    render(
      <Provider store={createMockStore({ preview: { visible: true } })}>
        <WidgetLayout />
      </Provider>
    );

    expect(document.body.getAttribute('style')).toBe('overflow: hidden');
  });

  it('sets a hidden overflow style on the body when in full screen mode', () => {
    render(
      <Provider store={mockStore}>
        <WidgetLayout fullScreenMode />
      </Provider>
    );

    expect(document.body.getAttribute('style')).toBe('overflow: hidden');
  });

  it('keeps existing inline styles when adding the overflow style', () => {
    document.body.setAttribute('style', 'margin: 0;');

    render(
      <Provider store={mockStore}>
        <WidgetLayout />
      </Provider>
    );

    expect(document.body.getAttribute('style')).toBe('margin: 0;overflow: auto');
  });
});
