import { Provider } from 'react-redux';
import { createMockStore } from '../../../utils/store';
import { render } from '@testing-library/react';
import WidgetLayout from '../layout';

const mockStore = createMockStore();

describe('<WidgetLayout />', () => {
  beforeEach(() => {
    document.body.setAttribute('style', '');
  });

  it('does not modify body overflow when idle', () => {
    render(
      <Provider store={mockStore}>
        <WidgetLayout />
      </Provider>
    );

    expect(document.body.getAttribute('style')).toBe('');
  });

  it('sets a hidden overflow style on the body when preview is visible', () => {
    render(
      <Provider store={createMockStore({ preview: { visible: true } })}>
        <WidgetLayout />
      </Provider>
    );

    expect(document.body.style.overflow).toBe('hidden');
  });

  it('sets a hidden overflow style on the body when in full screen mode', () => {
    render(
      <Provider store={mockStore}>
        <WidgetLayout fullScreenMode />
      </Provider>
    );

    expect(document.body.style.overflow).toBe('hidden');
  });

  it('does not modify existing inline styles when idle', () => {
    document.body.setAttribute('style', 'margin: 0;');

    render(
      <Provider store={mockStore}>
        <WidgetLayout />
      </Provider>
    );

    expect(document.body.getAttribute('style')).toBe('margin: 0;');
  });

  it('restores original overflow when preview closes', () => {
    const { rerender } = render(
      <Provider store={createMockStore({ preview: { visible: true } })}>
        <WidgetLayout />
      </Provider>
    );

    expect(document.body.style.overflow).toBe('hidden');

    rerender(
      <Provider store={mockStore}>
        <WidgetLayout />
      </Provider>
    );

    expect(document.body.style.overflow).toBe('');
  });
});
