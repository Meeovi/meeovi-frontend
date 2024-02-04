import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Mail_templateListRelationFilter } from "../inputs/Mail_templateListRelationFilter";
import { Mail_template_typeWhereInput } from "../inputs/Mail_template_typeWhereInput";
import { Mail_template_type_translationListRelationFilter } from "../inputs/Mail_template_type_translationListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Mail_template_typeWhereUniqueInput", {})
export class Mail_template_typeWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  technical_name?: string | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_typeWhereInput], {
    nullable: true
  })
  AND?: Mail_template_typeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_typeWhereInput], {
    nullable: true
  })
  OR?: Mail_template_typeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_typeWhereInput], {
    nullable: true
  })
  NOT?: Mail_template_typeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  available_entities?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  template_data?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Mail_templateListRelationFilter, {
    nullable: true
  })
  mail_template?: Mail_templateListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Mail_template_type_translationListRelationFilter, {
    nullable: true
  })
  mail_template_type_translation?: Mail_template_type_translationListRelationFilter | undefined;
}
