import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin'


const CashAcceptorList = (props) => {
  return (
    <Edit title='Edit a Cash Acceptor' perPage={25} {...props}>
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
    </Edit>
  )
}

export default CashAcceptorList
