import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_blockRelationFilter } from "../inputs/App_cms_blockRelationFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("App_cms_block_translationWhereInput", {})
export class App_cms_block_translationWhereInput {
  @TypeGraphQL.Field(_type => [App_cms_block_translationWhereInput], {
    nullable: true
  })
  AND?: App_cms_block_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationWhereInput], {
    nullable: true
  })
  OR?: App_cms_block_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationWhereInput], {
    nullable: true
  })
  NOT?: App_cms_block_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  label?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  app_cms_block_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => App_cms_blockRelationFilter, {
    nullable: true
  })
  app_cms_block?: App_cms_blockRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;
}
