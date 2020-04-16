import React from 'react'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

import { register } from '../../redux/ac/auth'

import Main from '../../src/components/Main'
import Header from '../../src/components/Header'
// import Errors from '../src/components/Errors'

export default function SignUp() {
  const router = useRouter()
  const dispatch = useDispatch()
  const signup = useSelector(state => state.auth.signup)

  const formik = useFormik({
    initialValues: {
      displayName: process.env.NODE_ENV === 'development' ? 'Mr. Arthur' : '',
      email: process.env.NODE_ENV === 'development' ? 'arthurzherko@gmail.com' : '',
      password: process.env.NODE_ENV === 'development' ? '123456' : ''
    },
    onSubmit: (event) => {
      if (signup.processing) return 
      dispatch(register(event))
    }
  })

  if (signup.complete) router.push('/signup/completed')

  return (
    <Main>
      <Header />

      <div className="wrapper signUp">
        <h1>Sign Up for Zhorben</h1>

        <form onSubmit={formik.handleSubmit}>
            <input
              required
              name="displayName"
              type="text"
              className="input"
              placeholder="First Name"
              onChange={formik.handleChange}
              value={formik.values.displayName}
            />

            <input
              required
              name="email"
              type="email"
              className="input"
              placeholder="you@domain.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <input
              required
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            <button type="submit">{signup.processing ? 'Loading...' : 'Continue'}</button>

            {/* <Errors error={error} /> */}
          </form>
      </div>

      <style jsx>{`
        h1 {
          font-size: 3rem;
        }

        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 260px;
        }

        .input {
          display: block;
          width: 100%;
          margin-bottom: 10px;
        }

        .wrapper {
          min-height: calc(100vh - 80px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        button {
          background: #25292E;
          border: 1px solid #25292E;
          height: 40px;
          line-height: 38px;
          padding: 0 25px;
          font-size: 0.875rem;
          cursor: pointer;
          border-radius: 6px;
          color: #fff;
          width: 100%;
        }

        button:hover {
          color: #25292E;
          background: transparent;
          transition: all 0.2s ease;
        }

        :global(.errors) {
          margin-top: 15px;
        }
      `}</style>
    </Main>  
  )
}