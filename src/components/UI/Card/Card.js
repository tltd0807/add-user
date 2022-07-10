import styles from "./Card.module.css";

const Card = (props) => {
  const className = styles.Card + ` ${props.className}`;
  console.log(className);
  return <div className={className}>{props.children}</div>;
};

export default Card;
