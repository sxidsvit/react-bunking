import { useEffect, useState } from 'react'
import { ulList, fetchData, setElementAttribute } from './helpers'

const App = () => {

  const [deviceTree, setDeviceTree] = useState({})
  // eslint-disable-next-line
  const [deviceTreeTypeMap, setDeviceTreeTypeMap] = useState({})

  useEffect(() => {

    fetchData('db.json')

    setDeviceTree(JSON.parse(localStorage.getItem('deviceTree')))
    setDeviceTreeTypeMap(JSON.parse(localStorage.getItem('deviceTreeTypeMap')))

    setTimeout(() => {
      setElementAttribute(["POS", "merchantIdx"])
      setElementAttribute(["ProductDispenser", "count"])
    }, 1000);

  }, [])

  const deviceNames = []
  for (let key in deviceTree) {
    deviceNames.push(key)
  }

  const deviceMapNames = []
  for (let key in deviceTreeTypeMap) {
    deviceMapNames.push(key)
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
