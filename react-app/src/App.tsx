import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/components/categories";


function App() {
  const [selectedCategory, setSelectedCategory ] = useState('')
  const [expenses, setExpenses] = useState([
    {id: 1, description:'abc', amount:10, category:'Utilities'},
    {id: 2, description:'xyz', amount:10, category:'Utilities'},
    {id: 3, description:'pqr', amount:10, category:'Groceries'},
    {id: 4, description:'mno', amount:10, category:'Entertainment'}
  ])
  const visibleExpenses = selectedCategory? expenses.filter((e)=> e.category===selectedCategory): expenses

  const handleDelete = (id: number) => {
    console.log('deleted', id);
    const e = expenses.filter((expense) => expense.id !== id);
    console.log(e)
    setExpenses(e);
  };
// I was getting error:Type '{ children: never[]; expenses: { id: number; description: string; amount: number; category: string; }[]; onDelete: (id: number) => void; }' is not assignable to type 'IntrinsicAttributes & Props'.
// and this got resolved by making the handleDelete handler for onDelete, before that there was this arrow function.
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={expense=>setExpenses([...expenses, {...expense, id:expenses.length+1}])}></ExpenseForm>
      </div>
      <div className="mb-3">
      <ExpenseFilter onSelectcategory={category => setSelectedCategory(category)}></ExpenseFilter>
      </div>
      
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;