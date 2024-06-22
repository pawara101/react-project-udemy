
// interface TabButtonProps {
//   label: string;
// }

interface Props {
  children: string;
  onSelect: () => void;
  isSelected: boolean;//
}
// Here sending Prop 
export default function TabButtons({ children, onSelect, isSelected }: Props) {

console.log("Tab button Component Rendered"); // this should be printed 1 time
  return (
        <button className={isSelected ? 'active': undefined} onClick={onSelect}>{children}</button>

  );
}