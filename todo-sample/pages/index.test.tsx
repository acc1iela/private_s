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

  test('deletes a todo', () => {
    render(<TodoApp />);

    // Add a new todo
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');
    fireEvent.change(input, { target: { value: 'Todo to be deleted' } });
    fireEvent.click(addButton);

    // Find the delete button and click it
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    // Check that the todo has been deleted
    expect(screen.queryByText('Todo to be deleted')).toBeNull();
  });

  test('marks a todo as done', () => {
    render(<TodoApp />);

    // Add a new todo
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');
    fireEvent.change(input, { target: { value: 'Todo to be marked' } });
    fireEvent.click(addButton);

    // Find the todo text and click it
    const todoText = screen.getByText('Todo to be marked');
    fireEvent.click(todoText);

    // Check that the todo has been marked as done
    expect(todoText).toHaveClass('done');
  });
});
