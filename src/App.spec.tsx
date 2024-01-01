import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  it('should render App component', () => {
    render(<App />);
    expect(screen.getByText('Styled H1 Tag')).toBeInTheDocument();
    expect(screen.getByText('SCSS H1 TAG')).toBeInTheDocument();
  });
});
