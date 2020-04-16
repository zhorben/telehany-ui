import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

import { login } from '../redux/ac/auth'

import Main from '../src/components/Main'
import Header from '../src/components/Header'

export default function SignIn() {
  const router = useRouter()  
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)
  const processing = useSelector(state => state.auth.signin.processing)

  const formik = useFormik({
    initialValues: {
      email: process.env.NODE_ENV === 'development' ? 'user1@mail.com' : '',
      password: process.env.NODE_ENV === 'development' ? '123123' : ''
    },
    onSubmit: (event) => {
      if (processing) return
      dispatch(login(event))
    }
  })

  if (token) router.push('/')

  return (
    <Main>
      <Header />

      <div className="wrapper signIn">
        <h1>Log in to Zhorben</h1>

        <form onSubmit={formik.handleSubmit}>
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
              placeholder="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            <button type="submit">Continue</button>
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