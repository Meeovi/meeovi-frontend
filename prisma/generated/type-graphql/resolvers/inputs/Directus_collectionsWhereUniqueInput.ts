import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { Directus_collectionsListRelationFilter } from "../inputs/Directus_collectionsListRelationFilter";
import { Directus_collectionsNullableRelationFilter } from "../inputs/Directus_collectionsNullableRelationFilter";
import { Directus_collectionsWhereInput } from "../inputs/Directus_collectionsWhereInput";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Directus_collectionsWhereUniqueInput", {})
export class Directus_collectionsWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  collection?: string | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsWhereInput], {
    nullable: true
  })
  AND?: Directus_collectionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsWhereInput], {
    nullable: true
  })
  OR?: Directus_collectionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsWhereInput], {
    nullable: true
  })
  NOT?: Directus_collectionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  icon?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  note?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  display_template?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  hidden?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  singleton?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  translations?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  archive_field?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  archive_app_filter?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  archive_value?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  unarchive_value?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  sort_field?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  accountability?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  color?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  item_duplication_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  sort?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  group?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  collapse?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  preview_url?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsNullableRelationFilter, {
    nullable: true
  })
  directus_collections?: Directus_collectionsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsListRelationFilter, {
    nullable: true
  })
  other_directus_collections?: Directus_collectionsListRelationFilter | undefined;
}
