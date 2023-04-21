import { Link } from "react-router-dom";

import React from 'react'

const NotFound = () => {
  return (
    <main>
      <div className="pagetitle">404 - page is  #NotFound</div>
      <div className="info">
        GO back to <Link to='/'><b>Homepage</b></Link>
      </div>
    </main>
  )
}
export default NotFound;
