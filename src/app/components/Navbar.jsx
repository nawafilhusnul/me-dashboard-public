'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/v1/configs').
    then(function (response) {
      if (response.status === 200) {
        const navbarItems = response.data.data.navbar_items;
        setItems(navbarItems)
      }
    });
  },[])

  return (
    <div className="navbar bg-slate-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {
              items.map((item, key) => {
                return (
                  <li key={key}><a>{item}</a></li>
                )
              })
            }
          </ul>
        </div>
        <a className="btn btn-ghost sm:text-xl">Husnul Nawafil Dashboard</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            items.map((item, key) => {
              return (
                <li key={key}><a>{item}</a></li>
              )
            })
          }
        </ul>
      </div>
      <div className="navbar-end max-h">
        <a className="btn btn-outline btn-primary btn-sm md:btn-md">Login</a>
      </div>
    </div>
  )
}