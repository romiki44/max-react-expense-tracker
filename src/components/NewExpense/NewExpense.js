import './NewExpense.css';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import AddExpense from './AddExpense';

const NewExpense = (props) => {
  const [showForm, setShowForm]=useState(false);  

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString().substring(2),
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const showFormHandler=()=> {
    setShowForm(true);
  }

  const cancelFormHandler=()=>{
    setShowForm(false);
  }

  return (
    showForm===false ? <AddExpense onShowForm={showFormHandler}/>: 
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancelForm={cancelFormHandler} />
    </div>
  );
};

export default NewExpense;
