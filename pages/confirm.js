import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'

import { confirm } from '../redux/ac/auth'

import Main from '../src/components/Main'
import Header from '../src/components/Header'
// import Errors from '../src/components/Errors'

function Confirm({ verificationToken }) {
  const router = useRouter()
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)
  const confirmation = useSelector(state => state.auth.confirmation)

  if (token) router.push('/')

  useEffect(() => {
    dispatch(confirm({ verificationToken }))
  }, [])

  return (
    <Main>
      <Header />

      <div className="wrapper signUp">
        <h1>Подтверждение почтового адреса</h1>

        {confirmation.error
          ? <React.Fragment>
              <p className="text-danger">При выполнени операции произошла ошибка.</p>
              <p className="text-danger">{confirmation.error}</p>
              <Link href="/">
                <a>Вход</a>
              </Link>
            </React.Fragment>
          : <React.Fragment>
              <p>Почтовый адрес подтверждается, пожалуйста, подождите.</p>
              <div className="spinner-border" role="status">
                <span className="sr-only">Загрузка...</span>
              </div>
            </React.Fragment>
        }
      </div>

      <style jsx>{`
        h1 {
          font-size: 3rem;
        }

        .wrapper {
          min-height: calc(100vh - 80px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </Main>
  )
}

Confirm.getInitialProps = async ({ query: { verificationToken } }) => ({ verificationToken })

export default Confirm