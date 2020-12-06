import React from 'react'
import Items from './components/Items'

const ulList = (arrayWithObjects, listName) => {
  let currentUlList = ''

  const numberObjectsInArray = arrayWithObjects.length
  for (let objNum = 0; objNum < numberObjectsInArray; objNum++) {

    const currentObject = arrayWithObjects[objNum]

    if (Object.keys(currentObject).length !== 0) {
      currentUlList = (
        <ul key={listName}>
          <Items currentItems={currentObject} />
        </ul>)
    }
  }
  return currentUlList
}

export default ulList