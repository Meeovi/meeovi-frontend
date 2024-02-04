import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesNullableWithAggregatesFilter } from "../inputs/BytesNullableWithAggregatesFilter";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";

@TypeGraphQL.InputType("Document_base_config_sales_channelScalarWhereWithAggregatesInput", {})
export class Document_base_config_sales_channelScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Document_base_config_sales_channelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Document_base_config_sales_channelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Document_base_config_sales_channelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  document_base_config_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  document_type_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableWithAggregatesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
