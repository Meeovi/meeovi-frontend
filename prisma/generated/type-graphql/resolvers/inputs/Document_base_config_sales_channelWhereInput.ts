import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Document_base_configRelationFilter } from "../inputs/Document_base_configRelationFilter";
import { Document_typeRelationFilter } from "../inputs/Document_typeRelationFilter";
import { Sales_channelNullableRelationFilter } from "../inputs/Sales_channelNullableRelationFilter";

@TypeGraphQL.InputType("Document_base_config_sales_channelWhereInput", {})
export class Document_base_config_sales_channelWhereInput {
  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelWhereInput], {
    nullable: true
  })
  AND?: Document_base_config_sales_channelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelWhereInput], {
    nullable: true
  })
  OR?: Document_base_config_sales_channelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelWhereInput], {
    nullable: true
  })
  NOT?: Document_base_config_sales_channelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  document_base_config_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  document_type_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  sales_channel_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Document_base_configRelationFilter, {
    nullable: true
  })
  document_base_config?: Document_base_configRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Document_typeRelationFilter, {
    nullable: true
  })
  document_type?: Document_typeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelNullableRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelNullableRelationFilter | undefined;
}
