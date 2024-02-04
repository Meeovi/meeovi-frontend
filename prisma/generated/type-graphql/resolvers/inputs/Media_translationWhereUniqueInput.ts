import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { MediaRelationFilter } from "../inputs/MediaRelationFilter";
import { Media_translationWhereInput } from "../inputs/Media_translationWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { media_translationMedia_idLanguage_idCompoundUniqueInput } from "../inputs/media_translationMedia_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Media_translationWhereUniqueInput", {})
export class Media_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => media_translationMedia_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  media_id_language_id?: media_translationMedia_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Media_translationWhereInput], {
    nullable: true
  })
  AND?: Media_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationWhereInput], {
    nullable: true
  })
  OR?: Media_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationWhereInput], {
    nullable: true
  })
  NOT?: Media_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  media_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  alt?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  title?: StringNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => MediaRelationFilter, {
    nullable: true
  })
  media?: MediaRelationFilter | undefined;
}
