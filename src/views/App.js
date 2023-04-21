import './App.css';
import Layout from '../components/complex/Layout';
import AddExpense from './AddExpense';
import Home from './Home';
import Summary from './Summary';
import NotFound from './NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

	return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='summary' element={<Summary />}/>
            <Route path='add' element={<AddExpense />}/>
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
      </div>   
    </BrowserRouter>
	);
}

export default App;
