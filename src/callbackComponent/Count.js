import React from 'react'

const Count = ({text,count}) => {
    console.log("Display", text)
  return (
    <div>
      {text}-{count}
    </div>
  )
}

export default Count
