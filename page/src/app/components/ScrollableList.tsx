"use client";

// ScrollableList.tsx
import { useState } from 'react';

const ScrollableList: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const items: string[] = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"];

  const toggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="scrollable-list bg-neutral-800 overflow-y-auto h-40 p-1 rounded">
      <div className="scrollable-box bg-neutral-800">
        {items.map(item => (
          <div 
            key={item} 
            className={`item ${selectedItems.includes(item) ? "selected" : ""} hover:bg-blue-300 cursor-pointer`}
            onClick={() => toggleItem(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableList;
