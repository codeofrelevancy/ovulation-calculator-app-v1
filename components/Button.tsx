import React from 'react';
import { ButtonProps } from '../types';

export default function Button({ children, disabled, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
}
