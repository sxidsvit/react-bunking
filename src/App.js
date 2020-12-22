import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import CardReaderList from './adminComponents/CardReader/CardReaderList'
import CardReaderCreate from './adminComponents/CardReader/CardReaderCreate'
import CardReaderEdit from './adminComponents/CardReader/CardReaderEdit'


const App = () => {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='CardReader' list={CardReaderList}
        create={CardReaderCreate} edit={CardReaderEdit} />
    </Admin>
  )
}

export default App
