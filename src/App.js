import { useEffect, useState } from 'react'
import Items from './components/Items'

const App = () => {

  const [deviceTree, setDeviceTree] = useState({})
  const [deviceTreeTypeMap, setDeviceTreeTypeMap] = useState({})



  useEffect(() => {
    async function fetchData(url) {
      try {
        const response = await fetch(url)
        const result = await response.json()
        const data = await result.api
        const { deviceTree, deviceTreeTypeMap } = await data

        localStorage.setItem('deviceTree', JSON.stringify(deviceTree))
        localStorage.setItem('deviceTreeTypeMap', JSON.stringify(deviceTreeTypeMap))

        setDeviceTree(deviceTree)
        setDeviceTreeTypeMap(deviceTreeTypeMap)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData('db.json')
  }, [])

  const deviceNames = []

  for (let key in deviceTree) {
    deviceNames.push(key)
  }

  let list = deviceNames.map(name => {
    const currentDevice = deviceTree[name][0]

    return (<ul key={name}>
      {name}
      <Items currentDevice={currentDevice} />
    </ul>)

  })

  return (
    <>
      {list}
    </>
  )
}

export default App;
