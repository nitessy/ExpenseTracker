import React, { useState } from 'react';
import ExpenseList from './ExpensesList';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses=props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

 
 


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
       <ExpensesChart expenses = {filteredExpenses}/>
     <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;


