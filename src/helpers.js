import React from 'react'
import Items from './components/Items'


//  ulList 

export const ulList = (arrayWithObjects, listName) => {
  let currentUlList = ''

  const numberObjectsInArray = arrayWithObjects.length
  for (let objNum = 0; objNum < numberObjectsInArray; objNum++) {

    const currentObject = arrayWithObjects[objNum]

    if (Object.keys(currentObject).length !== 0) {
      currentUlList = (
        <ul key={listName}>
          {listName}
          <Items currentItems={currentObject} />
        </ul>)
    }
  }
  return currentUlList
}

//  fetchData 

export async function fetchData(url) {
  try {
    const response = await fetch(url)
    const result = await response.json()
    const data = await result.api
    const { deviceTree, deviceTreeTypeMap } = await data

    localStorage.setItem('deviceTree', JSON.stringify(deviceTree))
    localStorage.setItem('deviceTreeTypeMap', JSON.stringify(deviceTreeTypeMap))
  } catch (err) {
    console.log(err)
  }
}
