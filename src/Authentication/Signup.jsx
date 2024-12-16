import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import auth from './Firebase'

const Signup = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    function signup(data) {
        const { email, password } = data
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user);
                alert("Registration Sucessfully........")
                navigate('/signin')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='col-4 mx-auto my-5 p-5 shadow'>
            <form method='post' onSubmit={handleSubmit(signup)}>
                <h4>Signup</h4>
                <div className="my-3">
                    <label htmlFor="">Email</label>
                    <input type="email" {...register('email')} className='form-control' placeholder='Enter Email' />
                </div>
                <div className="my-3">
                    <label htmlFor="">Password</label>
                    <input type="password" {...register('password')} className='form-control' placeholder='Enter Password' />
                </div>
                <button className='btn btn-outline-danger'>Signup</button>
                <NavLink to={`/signin`}>
                    <button className='btn btn-outline-success mx-4'>Signin</button>
                </NavLink>
            </form>
        </div>
    )
}

export default Signup
