import React, { ChangeEvent } from 'react';
import { InputProps } from '../types';

export default function Input({
  type,
  name,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <>
      <input
        type={type || 'text'}
        name={name}
        value={value || ''}
        placeholder={placeholder || ''}
        onChange={onChange}
        className="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </>
  );
}
