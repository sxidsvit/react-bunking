import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import CardReaderList from './adminComponents/CardReader/CardReaderList'
import CardReaderCreate from './adminComponents/CardReader/CardReaderCreate'
import CardReaderEdit from './adminComponents/CardReader/CardReaderEdit'
import CashAcceptorList from './adminComponents/CashAcceptor/CashAcceptorList'
import CashAcceptorCreate from './adminComponents/CashAcceptor/CashAcceptorCreate'
import CashAcceptorEdit from './adminComponents/CashAcceptor/CashAcceptorEdit'
import PrinterList from './adminComponents/Printer/PrinterList'
import PrinterCreate from './adminComponents/Printer/PrinterCreate'
import PrinterEdit from './adminComponents/Printer/PrinterEdit'


const App = () => {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='CardReader' list={CardReaderList} create={CardReaderCreate} edit={CardReaderEdit} />
      <Resource name='CashAcceptor' list={CashAcceptorList} create={CashAcceptorCreate} edit={CashAcceptorEdit} />
      <Resource name='Printer' list={PrinterList} create={PrinterCreate} edit={PrinterEdit} />
    </Admin>
  )
}

export default App
