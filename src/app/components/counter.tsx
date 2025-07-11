 "use client"
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    console.log('Counter Component')
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default Counter