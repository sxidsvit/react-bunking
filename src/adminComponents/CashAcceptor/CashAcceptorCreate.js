import React from 'react'
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin'


const CashAcceptorCreate = (props) => {
  return (
    <Create title='Create a Card Reader' {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="driver" />
        <TextInput source="modName" />
        <NumberInput source="modVersion" />
        <TextInput source="port" />
        <NumberInput source="status" />
        <TextInput source="type" />
        <TextInput source="version" />
      </SimpleForm>
    </Create>
  )
}

export default CashAcceptorCreate
