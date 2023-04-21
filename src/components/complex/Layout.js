import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import { FinancialDataProvider } from '../../context/FinancialContext';

import React from 'react'

const Layout = () => {
  return (
    <>
        <Navigation />
        <FinancialDataProvider>
          <Outlet />
        </FinancialDataProvider>
    </>
  )
}

export default Layout
