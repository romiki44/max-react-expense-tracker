import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');
  // const [filteredExpenses, setFilteredExpenses] = useState(
  //   props.items.filter((item) => item.date.getFullYear().toString() === '2021')
  // );

  //dalo sa to aj cez useState(), ale stacilo aj takto...
  //...ide iba o renderovanie dat, nie o zachovanie stavu dat
  //(neuvedomil som si, ze potrebujem iba filteredYear a ten mam ako State!!)
  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log('expenseFilter', selectedYear, filteredYear);
    // setFilteredExpenses(() =>
    //   props.items.filter((item) => {
    //     return item.date.getFullYear().toString() === selectedYear;
    //   })
    // );
    console.log(filteredExpenses);
  };

  //da sa pouzit klasicky cez ternary operator, alebo ako Max cez &&...vrati druhy clen ak obidva true
  //moze byt priamo vo vyraze, alebo ako samostatna premenna...lepsie takto kvoli prehladu 
  //pozor, premenna v reacte moze obsahovat jsx-code, kvazi html kod!
  //NAKONIEC SME TO UROBILI V SAMOSTANOM KOMPONENTE!!!
  /* let expensesContent=<p>No expenses found</p>;
  if(filteredExpenses.length>0) {
    expensesContent=filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        date={item.date}
        title={item.title}
        amount={item.amount}
      />
    ))
  } */
  
  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onFilterByYear={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
