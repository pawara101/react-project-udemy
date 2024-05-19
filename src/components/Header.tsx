const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max: number){
  return Math.floor(Math.random() * (max + 1))
}

export default function Header(){
    return (
      <header>
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[getRandomInt(2)]} React concepts you will need for almost any app you are going to build!
        </p>
      </header>
    );
  }
