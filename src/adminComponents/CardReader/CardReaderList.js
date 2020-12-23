import React from 'react'
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from 'react-admin'
import PortFieldShow from '../Utils/PortFieldShow'

const CardReaderlist = (props) => {
  return (
    <List perPage={25} {...props}>
      <Datagrid expand={<PortFieldShow />}>
        <TextField source="driver" />
        <TextField source="modName" />
        <NumberField source="modVersion" />
        <NumberField source="status" />
        <TextField source="statusDescr" />
        <EditButton basePath='/CardReader' />
        <DeleteButton basePath='/CardReader' />
      </Datagrid>
    </List>
  )
}

export default CardReaderlist
