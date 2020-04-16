import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { designerById } from '../redux/ac/designers'

import Main from '../src/components/Main'
import Header from '../src/components/Header'
import Errors from '../src/components/Errors'

const Brand = ({ id }) => {
  const dispatch = useDispatch()
  const designer = useSelector(state => state.designers.entities.get(id))
  const error = useSelector(state => state.designers.error)

  useEffect(() => {
    if (!designer) dispatch(designerById(id))
  }, [])

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

Brand.getInitialProps = async ({ query: { id } }) => ({ id })

export default Brand