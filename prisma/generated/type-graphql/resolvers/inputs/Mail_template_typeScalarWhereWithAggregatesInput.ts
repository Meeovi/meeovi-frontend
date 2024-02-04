import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Mail_template_typeScalarWhereWithAggregatesInput", {})
export class Mail_template_typeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Mail_template_typeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Mail_template_typeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_typeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Mail_template_typeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_typeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Mail_template_typeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  technical_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  available_entities?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  template_data?: StringNullableWithAggregatesFilter | undefined;
}
