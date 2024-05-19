interface CoreConceptProps {
    image: string;
    title: string;
    desc: string;
  }
  
export default function CoreConcept(props : CoreConceptProps){
    return(
      <li>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </li>
    )
  };