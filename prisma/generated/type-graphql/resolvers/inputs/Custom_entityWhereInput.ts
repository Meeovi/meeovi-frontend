import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppNullableRelationFilter } from "../inputs/AppNullableRelationFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { CategoryListRelationFilter } from "../inputs/CategoryListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { PluginNullableRelationFilter } from "../inputs/PluginNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Custom_entityWhereInput", {})
export class Custom_entityWhereInput {
  @TypeGraphQL.Field(_type => [Custom_entityWhereInput], {
    nullable: true
  })
  AND?: Custom_entityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityWhereInput], {
    nullable: true
  })
  OR?: Custom_entityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityWhereInput], {
    nullable: true
  })
  NOT?: Custom_entityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  fields?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  app_id?: BytesNullableFilter | undefined;

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
  flags?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  plugin_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  custom_fields_aware?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  label_property?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  deleted_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryListRelationFilter, {
    nullable: true
  })
  category?: CategoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AppNullableRelationFilter, {
    nullable: true
  })
  app?: AppNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PluginNullableRelationFilter, {
    nullable: true
  })
  plugin?: PluginNullableRelationFilter | undefined;
}
