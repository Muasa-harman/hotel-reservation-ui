import React from 'react'
import './List.Scss'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'

function List() {
  return (
    <div className='list'>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch"></div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List
