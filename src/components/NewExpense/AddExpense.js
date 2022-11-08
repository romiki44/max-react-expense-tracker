import './AddExpense.css'

const AddExpense=(props)=>{
    const submitHandler=(event)=>{
        event.preventDefault();
        props.onShowForm();
    }

    return (
        <form onSubmit={submitHandler}>
          <div className='new-expense'>
            <button type='submit'>Add New Expense</button>
          </div>
        </form>
      );
}

export default AddExpense;