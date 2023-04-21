import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='summary'>Summary</Link></li>
        <li><Link to='add'>Add Expense</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation
