import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event';



test('renders First screen', () => {
  render(<App />);
  const inputEl = screen.getByTestId("text-input");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("type", "text");
});

test('test input field', () => {
  render(<App />);

  const inputEl = screen.getByTestId("text-input");
  userEvent.type(inputEl, "buy some milk");

  expect(screen.getByTestId("text-input")).toHaveValue("buy some milk");
});

test('integration testing of button ,input field and list',async () => {
  render(<App/>);
  const inputEl = screen.getByTestId("text-input");
  userEvent.type(inputEl, "buy some milk");

  expect(screen.getByTestId("text-input")).toHaveValue("buy some milk");

  const button_test = screen.getByRole('button');
  expect(button_test).not.toBeDisabled();
  fireEvent.click(button_test);

  await screen.findAllByText('buy some milk',{exact: false});

});
