import './App.css';
import Navigation from '../components/complex/Navigation';
import Record from '../components/simple/Record';
// import axios from 'axios';
import { useState, useEffect } from 'react';
import api from '../api/expenses';

function App() {

  const [myExpenses, setMyExpenses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/expenses');
        console.log(response.data);
        setMyExpenses(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    }

    fetchData();

  }, [])

	return (
		<div className="App">
			<Navigation />
      <h1>Expenses List</h1>
      <div className='content'>
      {myExpenses.map(element => 
        <Record key={element.id} expense={element}/>
      )}
    </div>
		</div>
	);
}

export default App;
