import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";

@TypeGraphQL.InputType("Document_base_config_sales_channelScalarWhereInput", {})
export class Document_base_config_sales_channelScalarWhereInput {
  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelScalarWhereInput], {
    nullable: true
  })
  AND?: Document_base_config_sales_channelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelScalarWhereInput], {
    nullable: true
  })
  OR?: Document_base_config_sales_channelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_config_sales_channelScalarWhereInput], {
    nullable: true
  })
  NOT?: Document_base_config_sales_channelScalarWhereInput[] | undefined;

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
}
