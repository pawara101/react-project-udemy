import React from 'react';
interface TabButtonProps {
  label: string;
}

interface Props {
  children: string;
}

export default function TabButtons({ children }: Props) {

  //button click function
const handleClick = (): void =>{
  console.log("hello")
}
  return (
    <button onClick={ handleClick }>{children}</button>
  );
}