import React from 'react'

// Simplified GrainedEffect component - grain effect temporarily removed for TypeScript migration
const GrainedEffect = (props) => {
  return (
    <div className="overflow-hidden">
      {props.children}
    </div>
  )
}

export default GrainedEffect
