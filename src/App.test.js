import { render, screen } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event';

test('renders First screen', () => {
  render(<App />);
  const inputEl = screen.getByTestId("text-input");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("type", "text");
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('test input field', () => {
  render(<App />);

  const inputEl = screen.getByTestId("text-input");
  userEvent.type(inputEl, "buy some milk");

  expect(screen.getByTestId("text-input")).toHaveValue("buy some milk");
});
