import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  //let title = props.title;
  //useState() vzdy vrati dve premenne...povodny stav a funkciu na vykonaie zmenu
  //az ked zavolame funkciu na vykonanie zmeny, cize tu setTitle(),
  //az potom sa vykona re-rendering cceleho componentu!!!
  //[title, setTitle] musi byt const...title nesmieme menit my v kode!
  //props.title je nastavena len pri inicializacii....potom uz obsahuje akt. stav...hmm, toto mi nie je uplne jasne :(
  //p.s. setState() nemusime volat len rpi click-evente....mozeme ho volat hocikde...vysledok bude vzdy ten isty..re-rendering!
  const [title, setTitle] = useState(props.title);
  //console.log('ExpenseItem re-evalueted!');

  const clickHandler = () => {
    //cisto len zmena premenenej nenastartuje re-redenreding componentu!!
    //treba pouzit react-hook useState()...
    //v blazore napr. je to riesene cez obojsmerne bind-value(), tu cez useState()
    //title = 'Updated!';

    setTitle('Updated!'); //signal pre react, ze treba vykonat re-renrenderig componentu!
    console.log('Clicked!');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
