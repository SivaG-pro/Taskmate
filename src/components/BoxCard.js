export  function BoxCard({result,children}) {
  return (
    <div className={`box ${result}`}>
      {children}
    </div>
  )
}
