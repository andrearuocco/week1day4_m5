import { render, screen } from '@testing-library/react';
import Welcome from './Components/Welcome';
import { ThemeContextProvider } from './Components/ThemeContextProvider';
import AllTheBooks from './Components/pages/AllTheBooks';

//il componente welcome è montato corretttamente 
test('renders welcome', () => {
  render(<ThemeContextProvider><Welcome /></ThemeContextProvider>);
  const welcome = screen.getByText(/welcome/i);
  expect(welcome).toBeInTheDocument();
});

/* test('number of Cards', () => {
  render(<AllTheBooks />);

  const books = screen.getAllByTestId('manybooks')
  //console.log(books)

  expect(books).toHaveLength(150);
}) */

test('renders number of books', () => {
  render(<AllTheBooks />);
  const books = screen.getAllByTestId('manycard');
  expect(books).toHaveLength(150);
}); 
