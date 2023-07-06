import categories from './categories'

interface Props {
    onSelectcategory: (category:string)=> void
}
const ExpenseFilter = ({onSelectcategory}: Props) => {
  return (
    <select className="form-select" onChange={(event)=>onSelectcategory(event.target.value)}>
        <option value="">All categories</option>
        {categories.map(category=> <option key={category} value={category}>{category}</option>)}
    </select>
  )
}

export default ExpenseFilter