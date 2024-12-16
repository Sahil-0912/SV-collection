import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { NavLink, useNavigate } from 'react-router-dom'
import auth from './Firebase'
const Signin = () => {
    const { register, handleSubmit } = useForm()
    const navigate =  useNavigate()
    function signin(data) {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((res) => {
                console.log(res.user);
                alert("Login successfully........")
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function googleauth() {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((res) => {
                const result = GoogleAuthProvider.credentialFromResult(res)
                console.log(result);
                console.log(result.accessToken);
                console.log(res.user);

            })
            .catch((err) => {
                console.log(err);

            })
    }
    return (
        <div>
            <div className='col-4 mx-auto my-5 p-5 shadow'>
                <form method='post' onSubmit={handleSubmit(signin)}>
                    <h4>Signin</h4>
                    <div className="my-3">
                        <label htmlFor="">Email</label>
                        <input type="email" {...register('email')} className='form-control' placeholder='Enter Email' />
                    </div>
                    <div className="my-3">
                        <label htmlFor="">Password</label>
                        <input type="password" {...register('password')} className='form-control' placeholder='Enter Password' />
                    </div>
                    <button className='btn btn-danger w-100'>Signin</button>
                    <NavLink to={`/sidebar`}>
                        <button className='btn btn-warning w-100 mt-3' onClick={googleauth}>Continue With Google</button>
                    </NavLink>
                    <button className='btn btn-primary w-100 mt-3'>Continue With FaceBook</button>
                </form>
            </div>
        </div>
    )
}

export default Signin
