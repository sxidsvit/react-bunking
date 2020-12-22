import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin'


const PrinterEdit = (props) => {
  return (
    <Edit title='Edit a Card Reader' {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="driver" />
        <TextInput source="modName" />
        <NumberInput source="modVersion" />
        <TextInput multiline source="papperState" />
        <TextInput multiline source="port" />
        <NumberInput source="status" />
      </SimpleForm>
    </Edit>
  )
}

export default PrinterEdit
