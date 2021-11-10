import { render, fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import TextBox from "./components/TextBox/TextBox"
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

test('integration testing of button ,input field and list', async () => {
  render(<App />);
  const inputEl = screen.getByTestId("text-input");
  userEvent.type(inputEl, "buy some milk");

  expect(screen.getByTestId("text-input")).toHaveValue("buy some milk");

  const button_test = screen.getByRole('button');
  expect(button_test).not.toBeDisabled();
  fireEvent.click(button_test);

  await screen.findAllByText('buy some milk', { exact: false });

});

test('test for empty input field', async () => {
  render(<App />);
  const inputEl = screen.getByTestId("text-input");
  userEvent.type(inputEl, "");

  expect(screen.getByTestId("text-input")).toHaveValue("");

  const button_test = screen.getByRole('button');
  expect(button_test).not.toBeDisabled();
  fireEvent.click(button_test);

  await screen.findAllByText('cannot add empty item', { exact: false });

});

test('test for api is returning the list of todos and it is showing in html', async () => {
  render(<App />);
  await waitForElementToBeRemoved(() => screen.getByText(/Fetching todos/i));
  const get_listitem_before_click = await screen.getAllByRole("listitem");

});

test('test for adding items and get length of list of items', async () => {

  render(<App />)
  await waitForElementToBeRemoved(() => screen.getByText(/Fetching todos/i));
  const get_listitem_before_click = screen.getAllByRole("listitem");
  const len_listitem_before = get_listitem_before_click.length;
  const inputEl = screen.getByTestId("text-input");
  userEvent.type(inputEl, "Product");

  expect(screen.getByTestId("text-input")).toHaveValue("Product");

  const button_test = screen.getByRole('button');
  expect(button_test).not.toBeDisabled();
  fireEvent.click(button_test);

  await screen.findAllByText('Product', { exact: false });
  render(<TextBox />);
  const get_listitem_after_click = await screen.getAllByRole("listitem")
  const len_listitem_after = get_listitem_after_click.length

  expect(len_listitem_before + 1).toBe(len_listitem_after)

});

