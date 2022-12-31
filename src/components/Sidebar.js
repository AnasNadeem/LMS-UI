import React from 'react'

const Sidebar = () => {
  return (
    <div className="container sidebar">
        <div className="sidebarBody">
        <li>
            <a className="sidebarBodyA" href="#">
                Home
            </a>
        </li>
        <li>
            <a className="sidebarBodyA" href="#">
            Structure
            </a>
        </li>
        <li>
            <a className="sidebarBodyA" href="#">
            Report
            </a>
        </li>
        <li>
            <a className="sidebarBodyA" href="#">
            Users
            </a>
        </li>
        </div>
    </div>
  )
}

export default Sidebar