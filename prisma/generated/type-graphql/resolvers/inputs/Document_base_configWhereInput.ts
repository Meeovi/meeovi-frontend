import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Document_base_config_sales_channelListRelationFilter } from "../inputs/Document_base_config_sales_channelListRelationFilter";
import { Document_typeRelationFilter } from "../inputs/Document_typeRelationFilter";
import { MediaNullableRelationFilter } from "../inputs/MediaNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Document_base_configWhereInput", {})
export class Document_base_configWhereInput {
  @TypeGraphQL.Field(_type => [Document_base_configWhereInput], {
    nullable: true
  })
  AND?: Document_base_configWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configWhereInput], {
    nullable: true
  })
  OR?: Document_base_configWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configWhereInput], {
    nullable: true
  })
  NOT?: Document_base_configWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  filename_prefix?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  filename_suffix?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  document_number?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  global?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  document_type_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  logo_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  config?: StringNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => MediaNullableRelationFilter, {
    nullable: true
  })
  media?: MediaNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Document_typeRelationFilter, {
    nullable: true
  })
  document_type?: Document_typeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelListRelationFilter, {
    nullable: true
  })
  document_base_config_sales_channel?: Document_base_config_sales_channelListRelationFilter | undefined;
}
