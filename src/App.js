import { useEffect, useState } from 'react'

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

  const modNames = []
  for (let key in deviceTree) {
    modNames.push(deviceTree[key][0].modName)
  }

  let list = modNames.map(item => {
    return `<div>${item}</div>`
  }).join('')
  console.log(typeof list);

  return (
    <>
      {list}
    </>
  )
}

export default App;
