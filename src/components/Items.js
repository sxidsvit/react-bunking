import React from 'react';
import ulList from '../helpers'

const Items = ({ currentItems }) => {

  const keys = Object.keys(currentItems)
  const currentItemsList = keys.map(key => {
    return (<li key={key}>
      {key}: {
        Array.isArray(currentItems[key])
          ? ulList(currentItems[key], key)
          : currentItems[key]
      }
    </li>)
  })

  return (
    <>
      {currentItemsList}
    </>
  )
}

export default Items;