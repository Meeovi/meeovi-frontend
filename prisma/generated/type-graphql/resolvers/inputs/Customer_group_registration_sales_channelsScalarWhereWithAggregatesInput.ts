import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";

@TypeGraphQL.InputType("Customer_group_registration_sales_channelsScalarWhereWithAggregatesInput", {})
export class Customer_group_registration_sales_channelsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Customer_group_registration_sales_channelsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Customer_group_registration_sales_channelsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Customer_group_registration_sales_channelsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  customer_group_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;
}
