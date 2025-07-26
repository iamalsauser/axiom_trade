import React, { useState, useRef, useEffect } from 'react';

interface ActionMenuItem {
  id: string;
  label: string;
  icon?: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'default' | 'danger';
}

interface ActionMenuProps {
  items: ActionMenuItem[];
  trigger: React.ReactNode;
  className?: string;
  align?: 'left' | 'right';
}

export const ActionMenu: React.FC<ActionMenuProps> = ({ 
  items, 
  trigger, 
  className = '',
  align = 'right'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = (item: ActionMenuItem) => {
    if (!item.disabled) {
      item.onClick();
      setIsOpen(false);
    }
  };

  return (
    <div className={`relative inline-block ${className}`} ref={menuRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      
      {isOpen && (
        <div className={`
          absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
          ${align === 'left' ? 'left-0' : 'right-0'}
        `}>
          <div className="py-1" role="menu">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                disabled={item.disabled}
                className={`
                  block w-full text-left px-4 py-2 text-sm
                  ${item.disabled 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : item.variant === 'danger'
                    ? 'text-red-700 hover:bg-red-50'
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
                role="menuitem"
              >
                <div className="flex items-center gap-2">
                  {item.icon && <span>{item.icon}</span>}
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
