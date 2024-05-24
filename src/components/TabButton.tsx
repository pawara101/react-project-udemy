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


  return (
    <button onClick={ onSelect }>{children}</button>
  );
}