import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Number_rangeRelationFilter } from "../inputs/Number_rangeRelationFilter";
import { Number_range_typeRelationFilter } from "../inputs/Number_range_typeRelationFilter";
import { Sales_channelNullableRelationFilter } from "../inputs/Sales_channelNullableRelationFilter";

@TypeGraphQL.InputType("Number_range_sales_channelWhereInput", {})
export class Number_range_sales_channelWhereInput {
  @TypeGraphQL.Field(_type => [Number_range_sales_channelWhereInput], {
    nullable: true
  })
  AND?: Number_range_sales_channelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelWhereInput], {
    nullable: true
  })
  OR?: Number_range_sales_channelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelWhereInput], {
    nullable: true
  })
  NOT?: Number_range_sales_channelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  number_range_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  sales_channel_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  number_range_type_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Number_rangeRelationFilter, {
    nullable: true
  })
  number_range?: Number_rangeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Number_range_typeRelationFilter, {
    nullable: true
  })
  number_range_type?: Number_range_typeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelNullableRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelNullableRelationFilter | undefined;
}
