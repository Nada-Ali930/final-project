import React, { memo } from 'react'

function Child({fName,sayHi}) {
    console.log('child');
    sayHi()
  return (
    <div>
      Child {fName.fName}
    </div>
  )
}
export default memo(Child);
