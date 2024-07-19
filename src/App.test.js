import { fireEvent, render, screen } from '@testing-library/react';
/* import '@testing-library/jest-dom'; */
import App from './App';

//il componente welcome è montato corretttamente 
test('renders welcome', () => {
  render(<App />);
  const welcome = screen.getByText(/welcome/i);
  expect(welcome).toBeInTheDocument();
});

test('number of Cards', () => {
  render(<App />);

  const books = screen.getAllByTestId('manybooks')
  //console.log(books)

  expect(books).toHaveLength(150);
}) 

test('renders CommentArea', () => {
  render(<App />);
  const books = screen.getAllByTestId('manybooks')
  fireEvent.click(books[0])
  

  const rate = screen.getByPlaceholderText(/rate/i)
  expect(rate).toBeInTheDocument()



})
describe('filter book', () => {
  test('searchOne', () => {
    render(<App/>)

    const filterInput = screen.getByPlaceholderText(/ricerca i libri che preferisci/i)
    fireEvent.change(filterInput, {target: {value: 'tri'}})

    const books = screen.getAllByTestId('manybooks')
    expect(books).toHaveLength(3) 
  })
  test('searchTwo', () => {
    render(<App/>)

    const filterInput = screen.getByPlaceholderText(/ricerca i libri che preferisci/i)
    fireEvent.change(filterInput, {target: {value: 'wil'}})

    const books = screen.getAllByTestId('manybooks')
    expect(books).toHaveLength(2) 
  })
})

test('click book', () => {
  render(<App />);
  const books = screen.getAllByTestId('manybooks')
  fireEvent.click(books[0])
  expect(books[0]).toHaveClass('selected')
})

test('two click', () => {
  render(<App />);
  const books = screen.getAllByTestId('manybooks')
  fireEvent.click(books[0])
  expect(books[0]).toHaveClass('selected')

  
  fireEvent.click(books[1])
  expect(books[0]).not.toHaveClass('selected')

})
test('comment', () => {
  const comment = screen.queryAllByTestId('comment')
  expect(comment).toHaveLength(0)
})

test('have comment', async () => {
  render(<App />);
  const books = screen.getAllByTestId('manybooks')
  fireEvent.click(books[0])
  const comment = await screen.findAllByTestId('comment')
  expect(comment).not.toHaveLength(0)
})
/* test('renders number of books', () => {
  render(<AllTheBooks />);
  const books = screen.getAllByTestId('manycard');
  expect(books).toHaveLength(150);
});  */
