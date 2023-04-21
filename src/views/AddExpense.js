import { useState, useContext } from "react";
import FinancialContext from "../context/FinancialContext";
import options from '../api/options.json';
import api from '../api/expenses';

const AddExpense = () => {
  
  const initialFormFieldValues = {
    person: "",
    account: "",
    category: "",
    bill: "",
    description: ""
  };
  const categories = options.categories;
  const users = options.people;

  const { data, setData, navigate } = useContext(FinancialContext);
  const [newExpense, setNewExpense] = useState(initialFormFieldValues);



  const handleSubmit = async (e) => {
    e.preventDefault();


    console.log(newExpense);
    try {
      const response = await api.post('/expenses', newExpense);
      const wholeData = [...data, response.data];
      setData(wholeData);
      setNewExpense(initialFormFieldValues);
      navigate('/');
    } catch (error) {
      console.log(error)
    }

  }

  const handleChange = e => {

    const name = e.target.name
    const value = name === 'bill'
      ? parseFloat(e.target.value)
      : e.target.value

    setNewExpense(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <main className="content">
      <h2>Add Expense Form</h2>
      <form className='form' onSubmit={handleSubmit}>
      <div className="form-field">
          <label htmlFor="person">Person</label>
          <select 
            id="person"
            name="person"
            required
            defaultValue="Wiktor"
            value={newExpense.person}
            onChange={handleChange}        
          >
            {users.map((select) => (
            <option value={select.value}>
              {select.label}
            </option>))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="account">Account</label>
          <input 
            type="text"
            id="account"
            name="account"
            placeholder="account"
            required
            value={newExpense.account}
            onChange={handleChange}        
          />
        </div>
        <div className="form-field">
          <label htmlFor="category">Category</label>
          <select 
            id="category"
            name="category"
            required
            defaultValue="JEDZENIE"
            value={newExpense.category}
            onChange={handleChange}        
          >
            {categories.map((option) => (
            <option value={option.val}>{option.name}</option>))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="bill">Amount</label>
          <input 
            type="number"
            id="bill"
            name="bill"
            value={newExpense.bill}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description</label>
          <textarea 
            id="description"
            name="description"
            placeholder="Field description..."
            value={newExpense.description}
            onChange={handleChange}
          />
        </div>
        
        {/* <select
          id="category"
          name="category"
        >
          <option></option>

        </select> */}
        <div className="form-field">
          <button type="submit">ADD</button>
        </div>
      </form>
    </main>
  )
}

export default AddExpense;