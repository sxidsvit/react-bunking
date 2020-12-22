import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin'


const CardReaderEdit = (props) => {
  return (
    <Edit title='Edit a Card Reader' {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="driver" />
        <TextInput source="modName" />
        <NumberInput source="modVersion" />
        <TextInput multiline source="port" />
        <NumberInput source="status" />
        <TextInput source="statusDescr" />
      </SimpleForm>
    </Edit>
  )
}

export default CardReaderEdit
