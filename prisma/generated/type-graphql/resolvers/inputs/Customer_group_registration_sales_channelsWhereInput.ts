import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Customer_groupRelationFilter } from "../inputs/Customer_groupRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { Sales_channelRelationFilter } from "../inputs/Sales_channelRelationFilter";

@TypeGraphQL.InputType("Customer_group_registration_sales_channelsWhereInput", {})
export class Customer_group_registration_sales_channelsWhereInput {
  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsWhereInput], {
    nullable: true
  })
  AND?: Customer_group_registration_sales_channelsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsWhereInput], {
    nullable: true
  })
  OR?: Customer_group_registration_sales_channelsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsWhereInput], {
    nullable: true
  })
  NOT?: Customer_group_registration_sales_channelsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  customer_group_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_groupRelationFilter, {
    nullable: true
  })
  customer_group?: Customer_groupRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelRelationFilter | undefined;
}
