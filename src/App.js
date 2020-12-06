import { useEffect, useState } from 'react'
import { ulList, fetchData } from './helpers'

const App = () => {

  const [deviceTree, setDeviceTree] = useState({})
  // eslint-disable-next-line
  const [deviceTreeTypeMap, setDeviceTreeTypeMap] = useState({})

  useEffect(() => {

    fetchData('db.json')

    setDeviceTree(JSON.parse(localStorage.getItem('deviceTree')))
    setDeviceTreeTypeMap(JSON.parse(localStorage.getItem('deviceTreeTypeMap')))

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
