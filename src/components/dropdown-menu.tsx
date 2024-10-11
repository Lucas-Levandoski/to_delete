'use client';

import { useEffect, useRef, useState } from 'react';

type props = {
  buttonContent: React.ReactNode;
  children: React.ReactNode;
}

export function DropdownMenu({ buttonContent, children }: props) {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: any) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={divRef}>
      <button type="button" onClick={() => handleToggle()} >
        {buttonContent}
      </button>
      {
        isOpen &&
        <div className="absolute w-full left-0 top-full p-4 bg-white rounded-b-xl shadow-lg">
          {children}
        </div>
      }
    </div>
  );
}