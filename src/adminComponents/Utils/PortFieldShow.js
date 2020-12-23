import React from 'react'
import { TextField, SimpleShowLayout, Edit } from 'react-admin'


const PortFieldShow = props => (
  <Edit {...props}  >
    <SimpleShowLayout>
      <TextField source="port" />
    </SimpleShowLayout>
  </Edit>
)

export default PortFieldShow