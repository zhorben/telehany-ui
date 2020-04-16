import Link from 'next/link'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchDesigners } from '../../redux/ac/designers'

export default () => {
  const dispatch = useDispatch()
  const designers = useSelector(state => state.designers.entities.valueSeq().toArray())

  useEffect(() => {
    dispatch(fetchDesigners())
  }, [])

  return (
    <div className="designers">
      <h3>Designers</h3>

      {designers.map(({ id, title }, index) =>
        <Link key={index} href={`/brand?id=${id}`} as={`/brand/${id}`}>
          <a>{title}</a>
        </Link>
      )}

    <style jsx>{`
      .designers {
        margin: 40px 0;
      }

      a {
        display: block;
        color: #000;
        text-decoration: underline;
        margin-bottom: 4px;
      }
    `}</style>
    </div>
  )
}