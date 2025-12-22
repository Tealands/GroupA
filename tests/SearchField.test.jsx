import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import SearchField from '../src/components/SearchField';

describe('SearchField', () => {
  test('renders input and button', () => {
    render(<SearchField />);

    const input = screen.getByPlaceholderText('漫画を検索...');
    const button = screen.getByRole('button', { name: /検索する/ });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('typing updates the input value', async () => {
    render(<SearchField />);
    const input = screen.getByPlaceholderText('漫画を検索...');
    await userEvent.type(input, '進撃の巨人');
    expect(input).toHaveValue('進撃の巨人');
  });

  test('clicking button calls onSearch with query', async () => {
    const onSearch = vi.fn();
    render(<SearchField onSearch={onSearch} />);

    const input = screen.getByPlaceholderText('漫画を検索...');
    const button = screen.getByRole('button', { name: /検索する/ });

    await userEvent.type(input, 'ドラゴンボール');
    await userEvent.click(button);

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith('ドラゴンボール');
  });
});
