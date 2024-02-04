import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("App_administration_snippetScalarWhereWithAggregatesInput", {})
export class App_administration_snippetScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [App_administration_snippetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: App_administration_snippetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: App_administration_snippetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: App_administration_snippetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  app_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  locale_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  value?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
