import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Lists } from './Lists';
import { DUMMY_DATA } from '../store/store';

describe('Lists component', () => {
  test('adds a new item to the list', () => {
    const { getByText, getByRole, getByLabelText } = render(
      <Lists list={DUMMY_DATA} 
      setList={jest.fn()}
      deletedList={[]}
      setDeletedList={jest.fn()}
      />
    );

    const addItemButton = getByText('ADD');
    fireEvent.click(addItemButton);

    expect(getByText('Item 4')).toBeInTheDocument();
  });

  test('deletes an item from the list', () => {
    const { getByText, getByRole, getByLabelText } = render(
      <Lists list={DUMMY_DATA} 
      setList={jest.fn()}
      deletedList={[]}
      setDeletedList={jest.fn()}
      />
    );

    const deleteButton = document.getElementById('closeButton');
    fireEvent.click(deleteButton);

    expect(getByText('Item 2')).not.toBeInTheDocument();
  });

  test('clears all items from the list', () => {
    const { getByText, getByRole, getByLabelText } = render(
      <Lists list={DUMMY_DATA} 
      setList={jest.fn()}
      deletedList={[]}
      setDeletedList={jest.fn()}
      />
    );

    const clearAllButton = getByText('Clear All');
    fireEvent.click(clearAllButton);

    expect(getByText('No Record Found')).toBeInTheDocument();
  });
});