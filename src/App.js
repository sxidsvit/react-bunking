import { useEffect, useState } from 'react'

const App = () => {

  const [deviceTree, setDeviceTree] = useState({})
  const [deviceTreeTypeMap, setDeviceTreeTypeMap] = useState({})

  useEffect(() => {
    console.log('useEffect ...')
    async function fetchData(url) {
      try {
        const response = await fetch(url)
        const result = await response.json()
        const data = await result.api
        console.log('data: ', data);
        const { deviceTree, deviceTreeTypeMap } = await data

        localStorage.setItem('deviceTree', JSON.stringify(deviceTree))
        localStorage.setItem('deviceTreeTypeMap', JSON.stringify(deviceTreeTypeMap))

        setDeviceTree(deviceTree)
        setDeviceTreeTypeMap(deviceTreeTypeMap)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData('/db.json')
  }, [])

  console.log('deviceTree: ', deviceTree);
  const modNames = []
  for (let key in deviceTree) {
    console.log('deviceTree[key][0].modName: ', deviceTree[key][0].modName);
    modNames.push(deviceTree[key][0].modName)
  }
  console.log('modNames: ', modNames);

  const list = 'Sergo'
  // const list = modNames.map(item => (`<div>${item}</div>`)).json(' ')

  return (
    { list }
  )
}

export default App;
