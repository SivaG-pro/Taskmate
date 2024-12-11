import { useState } from 'react';
export  function BoxCard({result,children}) {
  const [show,setShow]=useState(true);
  return (
    <>
    {show &&
    <div className={`box ${result}`}>
      {children}
      <button className='hide' onClick={() => setShow(!show)}>Hide</button>
    </div>
  }
  
    </>
  

  )
}
