import { useState } from 'react';
import './Card.scss';
function Card(props) {
  const [displayOption, setDisplayOption] = useState(false);
  const { name, img, options } = props;
  const handleClick = () => setDisplayOption(!displayOption);
  return (
    <section className="card-container" onClick={handleClick}>
      {displayOption ? (
        <ul className="card-list">
          {options.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <>
          <section className="top-card">
            <img className="card-img" src={img} alt={name}></img>
          </section>
          <section className="bottom-card">{name}</section>
        </>
      )}
    </section>
  );
}

export default Card;
