export default ({ error }) => {
  if (!error) return null

  return (
    <div className="errors">
      <span style={{ color: 'red' }}>
        {error}
      </span>
    </div>
  )
}