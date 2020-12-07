import { useEffect, useState } from 'react'
import { ulList, fetchData, setElementAttribute, getEditableElements } from './helpers'

const App = () => {

  const [deviceTree, setDeviceTree] = useState({})
  const [, setDeviceTreeTypeMap] = useState({})

  useEffect(() => {

    fetchData('db.json')

    setDeviceTree(JSON.parse(localStorage.getItem('deviceTree')))
    setDeviceTreeTypeMap(JSON.parse(localStorage.getItem('deviceTreeTypeMap')))

    setTimeout(() => {
      getEditableElements().map(data => setElementAttribute(data))
    }, 1000);

  }, [])

  const deviceNames = []
  for (let key in deviceTree) {
    deviceNames.push(key)
  }

  let list = []
  deviceNames.map(name =>
    list.push(ulList(deviceTree[name], name))
  )

  return (
    <>
      {list}
    </>
  )
}

export default App;
