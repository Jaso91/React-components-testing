import React from 'react';
import { render } from '@testing-library/react';
import App, { Counter, ChangeToLowerCase } from './App';
import TestRandom from '../src/testing'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders something :)', () => {
  const { getByText } = render(<TestRandom />);
  const linkElement = getByText(/Render something :)/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders counter', () => {
  const { getByText } = render(<Counter counter={2} />);
  const linkElement = getByText(/2/i);
  expect(linkElement).toBeInTheDocument();
});

test('converts to lowercasse', () => {
  const { getByText } = render(<ChangeToLowerCase str={'ABC'} />);
  const linkElement = getByText(/abc/i);
  expect(linkElement).toBeInTheDocument();
});