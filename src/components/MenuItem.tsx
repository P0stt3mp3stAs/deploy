// src/app/components/MenuItem.tsx

"use client";

import React from 'react';

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price }) => {
  return (
    <div className="flex flex-col items-center p-4 border border-blue-500 rounded-lg bg-red-50 w-72">
      <h2 className="text-lg font-semibold text-black mb-2">{name}</h2>
      <p className="text-sm text-black mb-4">{description}</p>
      <p className="text-black font-bold">${price.toFixed(2)}</p>
    </div>
  );
};

export default MenuItem;
