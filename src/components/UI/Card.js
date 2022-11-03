import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className; //prida dalsie css-triedy, ak su
  //childreen je rezervovane slovo, wraper na vlozeny obsah
  return <div className={classes}>{props.children}</div>;
};

export default Card;
