import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { Mail_template_typeRelationFilter } from "../inputs/Mail_template_typeRelationFilter";
import { Mail_template_type_translationWhereInput } from "../inputs/Mail_template_type_translationWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { mail_template_type_translationMail_template_type_idLanguage_idCompoundUniqueInput } from "../inputs/mail_template_type_translationMail_template_type_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Mail_template_type_translationWhereUniqueInput", {})
export class Mail_template_type_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => mail_template_type_translationMail_template_type_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  mail_template_type_id_language_id?: mail_template_type_translationMail_template_type_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationWhereInput], {
    nullable: true
  })
  AND?: Mail_template_type_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationWhereInput], {
    nullable: true
  })
  OR?: Mail_template_type_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationWhereInput], {
    nullable: true
  })
  NOT?: Mail_template_type_translationWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeRelationFilter, {
    nullable: true
  })
  mail_template_type?: Mail_template_typeRelationFilter | undefined;
}
