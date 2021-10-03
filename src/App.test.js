import { render, screen } from '@testing-library/react';
import App from './App';

describe("app", ()=>{
  it('should render on page', () => {
    render(<App />);
    const linkElement = screen.getByText(/News app/i);
    expect(linkElement).toBeInTheDocument();
  });
})

