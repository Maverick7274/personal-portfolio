import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '../../Assets/HeroImage.jpg'

function Header() {
  return (
    <div className='fixed top-0 left-0 w-full z-[100] border-b border-[]'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link>Skills</Link></li>
              <li><Link to='/projects'>Projects</Link></li>
              <li><Link>Blog</Link></li>
              <li><Link to="/" target="_blank">Contact</Link></li>
              <li>
                <Link>
                  Resume/CV
                  <div className='new-tab-icon'>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-middle">
          <Link to="/" className="btn btn-ghost normal-case text-xl">Neelanjan Mukherji</Link>
        </div>
        <div className="navbar-end">
            <div className="avatar">
              <div className="w-8 rounded">
                <img src={HeroImage} alt="Tailwind-CSS-Avatar-component" />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header