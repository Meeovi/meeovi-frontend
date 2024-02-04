import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("App_administration_snippetScalarWhereInput", {})
export class App_administration_snippetScalarWhereInput {
  @TypeGraphQL.Field(_type => [App_administration_snippetScalarWhereInput], {
    nullable: true
  })
  AND?: App_administration_snippetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetScalarWhereInput], {
    nullable: true
  })
  OR?: App_administration_snippetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetScalarWhereInput], {
    nullable: true
  })
  NOT?: App_administration_snippetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  app_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  locale_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  value?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
