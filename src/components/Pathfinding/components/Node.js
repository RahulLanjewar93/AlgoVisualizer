import React from 'react'
import '../components/css/node.css'

function Node({isStart, isEnd, row, col, isWall}) {
    const classes = isStart ? 'node-start': isWall ? "iswall" : isEnd ? 'node-end' : "";
  return (
    <div className={`node ${classes}`} id={`node-${row}-${col}`}>
      
    </div>
  )
}

export default Node
