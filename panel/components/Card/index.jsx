import React from "react";

const CardIcon = ({ children }) => (
  <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">{children}</div>
);

const CardData = ({ children }) => <div className="mx-5">{children}</div>;

const CardTitle = ({ children }) => (
  <h4 className="text-2xl font-semibold text-gray-700">{children}</h4>
);

const CardDescription = ({ children }) => (
  <div className="text-gray-500">{children}</div>
);

const Card = ({ children }) => {
  return (
    <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
      <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
        {children}
      </div>
    </div>
  );
};

Card.Icon = CardIcon;
Card.Data = CardData;
Card.Title = CardTitle;
Card.Description = CardDescription;

export default Card;
