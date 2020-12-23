import React from 'react'
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from 'react-admin'
import PortFieldShow from '../Utils/PortFieldShow'

const CashAcceptorList = (props) => {
  return (
    <List perPage={25} {...props}>
      <Datagrid expand={<PortFieldShow />}>
        <TextField source="driver" />
        <TextField source="modName" />
        <NumberField source="modVersion" />
        {/* <TextField source="port" /> */}
        <NumberField source="status" />
        <TextField source="type" />
        <TextField source="version" />
        <EditButton basePath='/CashAcceptor' />
        <DeleteButton basePath='/CashAcceptor' />
      </Datagrid>
    </List>
  )
}

export default CashAcceptorList
