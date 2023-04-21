
const Record = ( { expense } ) => {
  return (
        <section className='record'>
            <div className='val'>{expense.bill + " PLN"}</div>
            <div className='details'>
                <div className='row'>
                    <div className='field'>{expense.person}</div>
                    <div className='field'>{expense.account}</div>
                    <div className='field'>
                        <p className='category'>{expense.category}</p>
                    </div>
                </div>
                <div className='row'>
                    <p className='desc'>
                        {expense.description.length>50 ? expense.description.slice(0,50) + "..." : expense.description}
                    </p>
                </div>
            </div>
            <button className='btn'>🆇</button>
        </section>
    )
}

export default Record
