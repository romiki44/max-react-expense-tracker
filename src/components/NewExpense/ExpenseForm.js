import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  //toto je vraj ok, ale niekdy je mozno lepsi len jeden useState() a pouzit objekt!
  //NAKONIEC SME ZOSTALI PRI MULTISTATE!!!! (ostatne boli len ukazky, sakra...)
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //teraz ale treba urobit update vzdy pre vsetky tri premmenne (pre cely objekt)
  //const [userInput, setUserInput] = useState({
  //enteredTitle: '',
  //enteredAmount: null,
  //enteredDate: null,
  //});

  const titleChangeHandler = (event) => {
    //console.log(event.target.value);
    setEnteredTitle(event.target.value);

    //pozor, update musi zachovat aktualny stav a zmenit novy
    //ak by sme zmenili len enteredTitle, objekt by sa prepisal len touto polozkou a ostatne properties by sa stratili!!
    //ale ani toto vraj nie je uplne idealne...sice to vraj moze fungovat, aj vacsinou bude, ale nie vzdy ??
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //vraj to treba robit takto, lebo iba takto react garantuje, ze prevState bude vzdy korektny!!!
    //proste takto to bude fungovat vzdy korektne!!!!
    // setUserInput((prevInput) => {
    //   return { ...prevInput, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((prevInput) => {
    //   return { ...prevInput, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevInput) => {
    //   return { ...prevInput, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    //form-element defaultne v ramci javascriptu odosle pri onSubmit() request na server...teraz v podstate reaload stranky
    //to nechceme, preto preventDefault()
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expenseData);

    //volame externy handler aby ulozil data!!!!
    props.onSaveExpenseData(expenseData);

    //clear form
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
  };

  const cancelHandler = (event) => {
    props.onCancelForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle} //OnChange()+value->2-way binding
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount} //OnChange()+value->2-way binding
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate} //OnChange()+value->2-way binding
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={cancelHandler}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
