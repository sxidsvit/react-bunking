import React from 'react';

const Items = ({ currentDevice }) => {

  const keys = Object.keys(currentDevice)
  const currentDeviceList = keys.map(key => {
    return (<li key={key}>
      {key}: {
        Array.isArray(currentDevice[key])
          ? 'массив с объектами'
          : currentDevice[key]
      }
    </li>)
  })

  return (
    <>
      {currentDeviceList}
    </>
  )
}

export default Items;