import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type OrderWhereInput = {
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  updatedBy?: DateTimeNullableFilter;
};
