import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Created By" source="createdBy" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
