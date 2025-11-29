'use client';

import { useState, useEffect, useRef } from 'react';
import { Check, ChevronDown, X } from 'lucide-react';

interface Option {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface MultiSelectWithIconProps {
  options: Option[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
}

export const MultiSelectWithIcon = ({
  options,
  selectedValues,
  onChange,
  placeholder = 'Seleccionar...',
}: MultiSelectWithIconProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar el dropdown si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  const removeValue = (e: React.MouseEvent, value: string) => {
    e.stopPropagation();
    onChange(selectedValues.filter((v) => v !== value));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Caja de selección (Input) */}
      <div
        className="min-h-[42px] w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 flex flex-wrap gap-2 items-center cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValues.length === 0 ? (
          <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">{placeholder}</span>
        ) : (
          selectedValues.map((val) => {
            const option = options.find((o) => o.value === val);
            return (
              <span
                key={val}
                className="inline-flex items-center gap-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-full border border-indigo-200 dark:border-indigo-800"
              >
                {option?.icon && <span className="w-3 h-3">{option.icon}</span>}
                {option?.label}
                <button
                  type="button"
                  onClick={(e) => removeValue(e, val)}
                  className="hover:text-indigo-900 dark:hover:text-indigo-100 ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            );
          })
        )}
        <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
      </div>

      {/* Menú Desplegable */}
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((option) => {
            const isSelected = selectedValues.includes(option.value);
            return (
              <div
                key={option.value}
                className={`
                  flex items-center justify-between px-3 py-2 cursor-pointer text-sm
                  ${isSelected ? 'bg-indigo-50 dark:bg-indigo-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}
                `}
                onClick={() => handleSelect(option.value)}
              >
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  {/* Checkbox visual */}
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-colors
                      ${isSelected 
                        ? 'bg-indigo-600 border-indigo-600' 
                        : 'border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700'}
                    `}
                  >
                    {isSelected && <Check className="w-3 h-3 text-white" />}
                  </div>
                  
                  {option.icon && <span className="text-gray-500 dark:text-gray-400">{option.icon}</span>}
                  <span>{option.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};