import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Mail_template_type_translationScalarWhereInput", {})
export class Mail_template_type_translationScalarWhereInput {
  @TypeGraphQL.Field(_type => [Mail_template_type_translationScalarWhereInput], {
    nullable: true
  })
  AND?: Mail_template_type_translationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationScalarWhereInput], {
    nullable: true
  })
  OR?: Mail_template_type_translationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationScalarWhereInput], {
    nullable: true
  })
  NOT?: Mail_template_type_translationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  mail_template_type_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

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
