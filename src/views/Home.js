import { useContext } from "react";
import FinancialContext from "../context/FinancialContext";
import Record from "../components/simple/Record";


const Home = () => {

  const { data } = useContext(FinancialContext);

  return (
    <main>
        <h2>Expenses List</h2>
        <div className='content'>
            {data.map(element => 
            <Record key={element.id} expense={element}/>)}
        </div>
    </main>
  )
}

export default Home














        // {
        //     "id": 6,
        //     "name": "HIGIENA I CHEMIA"
        // },
        // {
        //     "id": 7,
        //     "name": "ZDROWIE"
        // },
        // {
        //     "id": 8,
        //     "name": "SPORT"
        // },
        // {
        //     "id": 9,
        //     "name": "EDUKACJA"
        // },
        // {
        //     "id": 10,
        //     "name": "WYJAZDY"
        // },
        // {
        //     "id": 11,
        //     "name": "UBRANIA I BUTY"
        // },
        // {
        //     "id": 12,
        //     "name": "PREZENTY"
        // },
        // {
        //     "id": 13,
        //     "name": "INNE"
        // },
        // {
        //     "id": 14,
        //     "name": "OPERACJE"
        // }