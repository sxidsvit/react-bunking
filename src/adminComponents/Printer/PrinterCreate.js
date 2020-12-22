import React from 'react'
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin'


const PrinterCreate = (props) => {
  return (
    <Create title='Create a Card Reader' {...props}>
      <SimpleForm>
        <TextInput source="driver" />
        <TextInput source="modName" />
        <NumberInput source="modVersion" />
        <TextInput source="papperState" />
        <TextInput multiline source="port" />
        <NumberInput source="status" />
      </SimpleForm>
    </Create>
  )
}

export default PrinterCreate
