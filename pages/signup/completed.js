import React from 'react'

import Main from '../../src/components/Main'
import Header from '../../src/components/Header'

export default function SignUpCompleted() {
  return (
    <Main>
      <Header />

      <div className="wrapper signUp">
        <h1>Поздравляем, вы зарегистрированы</h1>
        <p>На указанную вами почту отправлено письмо.</p>
        <p>Для завершения регистрации, пожалуйста, перейдите по ссылке из этого письма.</p>
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