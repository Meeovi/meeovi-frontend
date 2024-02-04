import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesNullableWithAggregatesFilter } from "../inputs/BytesNullableWithAggregatesFilter";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";

@TypeGraphQL.InputType("Number_range_sales_channelScalarWhereWithAggregatesInput", {})
export class Number_range_sales_channelScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Number_range_sales_channelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Number_range_sales_channelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Number_range_sales_channelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Number_range_sales_channelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  number_range_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableWithAggregatesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  number_range_type_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
