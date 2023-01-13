import React from 'react';
import { CycleLengthProps, TagProps } from '../types';

function Tag({
  value,
  onQuickSelection,
}: TagProps & { onQuickSelection: (value: number) => void }) {
  return (
    <span
      onClick={() => onQuickSelection(value)}
      className="cursor-pointer bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      {value}
    </span>
  );
}

export default function CycleLength({ onQuickSelection }: CycleLengthProps) {
  return (
    <div className="mt-6 flex flex-col md:flex-row flex-1 sm:items-stretch sm:justify-start">
      <div className="flex mb-2 md:mb-0 items-center">
        <span className="text-gray-400 text-sm font-medium">
          Quick selections
        </span>
      </div>
      <div className="md:ml-6">
        <div className="flex space-x-4">
          <Tag value={27} onQuickSelection={onQuickSelection} />
          <Tag value={28} onQuickSelection={onQuickSelection} />
          <Tag value={29} onQuickSelection={onQuickSelection} />
          <Tag value={30} onQuickSelection={onQuickSelection} />
        </div>
      </div>
    </div>
  );
}
