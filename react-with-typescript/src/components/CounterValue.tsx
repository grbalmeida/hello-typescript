import React from 'react'

interface ICounterValueProps {
  counter: number
}

export default (props: ICounterValueProps) => {
  return (
    <p>{props.counter}</p>
  )
}
