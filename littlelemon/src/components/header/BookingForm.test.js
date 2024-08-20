import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const mockOnSubmit = jest.fn();

  test('renders form fields correctly', () => {
    render(<BookingForm onSubmit={mockOnSubmit} availableTimes={['18:00', '19:00']} />);
    
    expect(screen.getByLabelText(/Name:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Guests:/)).toBeInTheDocument();
  });

  test('calls onSubmit when form is valid', () => {
    render(<BookingForm onSubmit={mockOnSubmit} availableTimes={['18:00', '19:00']} />);
    
    fireEvent.change(screen.getByLabelText(/Name:/), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Date:/), { target: { value: '2024-08-20' } });
    fireEvent.change(screen.getByLabelText(/Time:/), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText(/Guests:/), { target: { value: 2 } });
    
    fireEvent.submit(screen.getByTestId('booking-form'));

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
