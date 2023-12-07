import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Created By" source="createdBy" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Create>
  );
};
