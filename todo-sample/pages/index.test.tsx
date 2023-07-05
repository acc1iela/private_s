import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoApp from './index';

describe('TodoApp', () => {
  test('adds new todo', () => {
    render(<TodoApp />);

    // Find the input field and button
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    // Type into the input field and click the button
    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.click(button);

    // Check that the new todo has been added
    expect(screen.getByText('New todo')).toBeInTheDocument();
  });

  // Add more tests for deleteTodo and markTodo here
});
