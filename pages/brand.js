import client from '../network'

import Main from '../src/components/Main'
import Header from '../src/components/Header'
import Errors from '../src/components/Errors'

function Brand({ designer, error }) {
  return (
    <Main>
      <Header />

      <div className="wrapper">
        {designer &&
          <React.Fragment>
            <h1>{designer.title}</h1>
            <h2>{designer.fullTitle}</h2>
            <p>{designer.description}</p>
          </React.Fragment>
        }

        <Errors error={error} />
      </div>

      <style jsx>{`
        p {
          line-height: 26px;
          font-size: 16px;
        }
      `}</style>
    </Main>
  )
}

Brand.getInitialProps = async ({ query: { id } }) => {
  try {
    const response = await client.get(`/api/designers/${id}`)
    return { designer: response.data.designer }
  } catch (error) {
    return { error: error.response.data.error }
  }
}

export default Brand