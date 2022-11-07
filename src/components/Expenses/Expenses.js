import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';

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

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onFilterByYear={filterChangeHandler}
      />
      {filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
