import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>  
    <Footer/>
    </>
  )
}

export default Layout
// OUTLET FROM REACT ROUTER GIVES US THE FUNCIONALITY OF NESTING, WHICH WE DID IN MAIN.JSX .
//  WE USED OUTLET IN LAYOUT, WHEN WE USED  ROUTE IN MAIN.JSX , WE FIRST MENTIONED LAYOUT IN ROUTE, THEN THE  
//CHILDREN, NESTING HELPED US TO RENDER THE CHILDRENS I.E HOME ABOUT CONTACTS ETC.