import Link from 'next/link'

export default function Designers({ designers }) {
  return (
    <React.Fragment>
      {designers.map(({ id, title }, index) =>
        <Link key={index} href={`/brand?id=${id}`} as={`/brand/${id}`}>
          <a>{title}</a>
        </Link>
      )}

      <style jsx>{`
        a {
          display: block;
          color: #000;
          text-decoration: underline;
          margin-bottom: 4px;
        }
      `}</style>
    </React.Fragment>
  )
}