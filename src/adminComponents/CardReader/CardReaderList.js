import React from 'react'
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from 'react-admin'


const CardReaderlist = (props) => {
  return (
    <List perPage={25} {...props}>
      <Datagrid>
        <TextField source="driver" />
        <TextField source="modName" />
        <NumberField source="modVersion" />
        {/* <TextField source="port" /> */}
        <NumberField source="status" />
        <TextField source="statusDescr" />
        <EditButton basePath='/CardReader' />
        <DeleteButton basePath='/CardReader' />
      </Datagrid>
    </List>
  )
}

export default CardReaderlist
