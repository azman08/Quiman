import React from "react";

const ModernScrollbar = () => {
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="relative h-[400px] w-[300px] overflow-hidden border rounded-lg shadow-md">
      <div className="h-full overflow-y-scroll custom-scrollbar">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-blue-600 text-white mb-2 rounded-md"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModernScrollbar;
