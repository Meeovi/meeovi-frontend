import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Document_typeRelationFilter } from "../inputs/Document_typeRelationFilter";
import { Document_type_translationWhereInput } from "../inputs/Document_type_translationWhereInput";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { document_type_translationDocument_type_idLanguage_idCompoundUniqueInput } from "../inputs/document_type_translationDocument_type_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Document_type_translationWhereUniqueInput", {})
export class Document_type_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => document_type_translationDocument_type_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  document_type_id_language_id?: document_type_translationDocument_type_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationWhereInput], {
    nullable: true
  })
  AND?: Document_type_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationWhereInput], {
    nullable: true
  })
  OR?: Document_type_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationWhereInput], {
    nullable: true
  })
  NOT?: Document_type_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  document_type_id?: BytesFilter | undefined;

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

  @TypeGraphQL.Field(_type => Document_typeRelationFilter, {
    nullable: true
  })
  document_type?: Document_typeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;
}
