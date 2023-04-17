import React from 'react'

const Record = ( { expense } ) => {
  return (
        <section className='record'>
            <div className='val'>{expense.value + " PLN"}</div>
            <div className='details'>
                <div className='row'>
                    <div className='field'>{expense.person}</div>
                    <div className='field'>{expense.account}</div>
                    <button>delete</button>
                </div>
                <div className='row'>
                    <p className='desc'>{expense.description}</p>
                </div>
            </div>
        </section>
    )
}

export default Record
