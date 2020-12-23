import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import { ChromeReaderMode, AttachMoney, Print } from '@material-ui/icons';
import Dashboard from './adminComponents/Dashboard/Dashboard'
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
    <Admin dashboard={Dashboard} dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='CardReader' list={CardReaderList} create={CardReaderCreate} edit={CardReaderEdit} icon={ChromeReaderMode} />
      <Resource name='CashAcceptor' list={CashAcceptorList} create={CashAcceptorCreate} edit={CashAcceptorEdit} icon={AttachMoney} />
      <Resource name='Printer' list={PrinterList} create={PrinterCreate} edit={PrinterEdit} icon={Print} />
    </Admin>
  )
}

export default App
