import React from 'react'
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin'


const CardReaderCreate = (props) => {
  return (
    <Create title='Create a Card Reader' {...props}>
      <SimpleForm>
        <TextInput source="driver" />
        <TextInput source="modName" />
        <NumberInput source="modVersion" />
        <TextInput multiline source="port" />
        <NumberInput source="status" />
        <TextInput source="statusDescr" />
      </SimpleForm>
    </Create>
  )
}

export default CardReaderCreate
