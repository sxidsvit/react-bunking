import React from 'react'
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from 'react-admin'


const PrinterList = (props) => {
  return (
    <List perPage={25} {...props}>
      <Datagrid>
        <TextField source="driver" />
        <TextField source="modName" />
        <NumberField source="modVersion" />
        <TextField source="papperState" />
        {/* <TextField source="port" /> */}
        <NumberField source="status" />
        <EditButton basePath='/Printer' />
        <DeleteButton basePath='/Printer' />
      </Datagrid>
    </List>
  )
}

export default PrinterList
