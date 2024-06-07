import React from 'react';

interface TabButtonProps {
  label: string;
}

interface Props {
  children: string;
  onSelect: () => void; // 
}
// Here sending Prop 
export default function TabButtons({ children, onSelect }: Props) {

console.log("Tab button Component Rendered"); // this should be printed 1 time
  return (
    <button id='tab-button' onClick={ onSelect }>{children}</button>
  );
}