import React from 'react';
import { CardProps } from '../types';

export default function Card({ date, title, description }: CardProps) {
  return (
    <div className="bg-slate-900 rounded-lg px-6 py-8 shadow-xl">
      <div>
        <span className="text-white inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          {date}
        </span>
      </div>
      <h3 className="text-white mt-5 text-base font-medium tracking-tight">
        {title}
      </h3>
      <p className="text-slate-400 mt-2 text-sm">{description}</p>
    </div>
  );
}
