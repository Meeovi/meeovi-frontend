import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { Mail_header_footerRelationFilter } from "../inputs/Mail_header_footerRelationFilter";
import { Mail_header_footer_translationWhereInput } from "../inputs/Mail_header_footer_translationWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { mail_header_footer_translationMail_header_footer_idLanguage_idCompoundUniqueInput } from "../inputs/mail_header_footer_translationMail_header_footer_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Mail_header_footer_translationWhereUniqueInput", {})
export class Mail_header_footer_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => mail_header_footer_translationMail_header_footer_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  mail_header_footer_id_language_id?: mail_header_footer_translationMail_header_footer_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationWhereInput], {
    nullable: true
  })
  AND?: Mail_header_footer_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationWhereInput], {
    nullable: true
  })
  OR?: Mail_header_footer_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationWhereInput], {
    nullable: true
  })
  NOT?: Mail_header_footer_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  mail_header_footer_id?: BytesFilter | undefined;

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
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  header_html?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  header_plain?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  footer_html?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  footer_plain?: StringNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => Mail_header_footerRelationFilter, {
    nullable: true
  })
  mail_header_footer?: Mail_header_footerRelationFilter | undefined;
}
