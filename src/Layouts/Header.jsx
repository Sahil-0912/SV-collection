import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { TiUserAdd } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                    <div className="container">
                        <a className="navbar-brand fw-bold fs-4" href="#">SV Collection</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/products">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                            <div classNameName="buttons">
                                <NavLink to={'/signin'}>
                                    <button className='btn btn-outline-dark'>
                                        <FiLogIn className='me-1' />
                                        Login
                                    </button>
                                </NavLink>
                                <NavLink to={'/signup'}>
                                    <button className='btn btn-outline-dark ms-2'>
                                        <TiUserAdd className='me-1' />
                                        Register
                                    </button>
                                </NavLink>
                                <NavLink to={'/cart'}>
                                    <button className='btn btn-outline-dark ms-2'>
                                        <FaCartPlus className='me-1' />
                                        Cart (0)
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
