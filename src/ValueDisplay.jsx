import React, { useRef, useEffect } from 'react';

const ValueDisplay = ({ currentValue }) => {
  const prevValueRef = useRef('');

  useEffect(() => {
    prevValueRef.current = currentValue;
  }, [currentValue]);

  return (
    <div>
      <p>Current Value: {currentValue}</p>
      <p>Previous Value: {prevValueRef.current}</p>
    </div>
  );
};

export default ValueDisplay;