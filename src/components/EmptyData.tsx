import React from 'react';

const EmptyData: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center mt-40  p-20 bg-dark-purple rounded-lg">
        <p className="text-gray-500 text-center">No Contact Found Please add contact from create contact button</p>
      </div>
    </div>
  );
};

export default EmptyData;
