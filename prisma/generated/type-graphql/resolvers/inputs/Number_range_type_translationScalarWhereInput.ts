import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Number_range_type_translationScalarWhereInput", {})
export class Number_range_type_translationScalarWhereInput {
  @TypeGraphQL.Field(_type => [Number_range_type_translationScalarWhereInput], {
    nullable: true
  })
  AND?: Number_range_type_translationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationScalarWhereInput], {
    nullable: true
  })
  OR?: Number_range_type_translationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationScalarWhereInput], {
    nullable: true
  })
  NOT?: Number_range_type_translationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  number_range_type_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  type_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
