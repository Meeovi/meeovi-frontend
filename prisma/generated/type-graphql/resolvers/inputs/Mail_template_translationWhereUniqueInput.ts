import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { Mail_templateRelationFilter } from "../inputs/Mail_templateRelationFilter";
import { Mail_template_translationWhereInput } from "../inputs/Mail_template_translationWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { mail_template_translationMail_template_idLanguage_idCompoundUniqueInput } from "../inputs/mail_template_translationMail_template_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Mail_template_translationWhereUniqueInput", {})
export class Mail_template_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => mail_template_translationMail_template_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  mail_template_id_language_id?: mail_template_translationMail_template_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationWhereInput], {
    nullable: true
  })
  AND?: Mail_template_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationWhereInput], {
    nullable: true
  })
  OR?: Mail_template_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationWhereInput], {
    nullable: true
  })
  NOT?: Mail_template_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  mail_template_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  sender_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  subject?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  content_html?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  content_plain?: StringNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => Mail_templateRelationFilter, {
    nullable: true
  })
  mail_template?: Mail_templateRelationFilter | undefined;
}
