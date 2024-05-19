interface TabButtonProps {
    label: string;
  }
  
  export default function TabButtons(props: TabButtonProps) {
    return (
      <button>{props.label}</button>
    );
  }