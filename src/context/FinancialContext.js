import { createContext, useState, useEffect } from "react";
import api from '../api/expenses';
import { useNavigate } from "react-router-dom";


const FinancialContext = createContext({});

export const FinancialDataProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await api.get('/expenses');
          console.log(response.data);
          setData(response.data);
        } catch (err) {
          console.log(err.response.data);
        }
      }
  
      fetchData();
    }, [])


    return (
        <FinancialContext.Provider value={{ data, setData, navigate }}>
            {children}
        </FinancialContext.Provider>
    )
}

export default FinancialContext;