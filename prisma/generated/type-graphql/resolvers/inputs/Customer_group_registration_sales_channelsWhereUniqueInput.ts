import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Customer_groupRelationFilter } from "../inputs/Customer_groupRelationFilter";
import { Customer_group_registration_sales_channelsWhereInput } from "../inputs/Customer_group_registration_sales_channelsWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { Sales_channelRelationFilter } from "../inputs/Sales_channelRelationFilter";
import { customer_group_registration_sales_channelsCustomer_group_idSales_channel_idCompoundUniqueInput } from "../inputs/customer_group_registration_sales_channelsCustomer_group_idSales_channel_idCompoundUniqueInput";

@TypeGraphQL.InputType("Customer_group_registration_sales_channelsWhereUniqueInput", {})
export class Customer_group_registration_sales_channelsWhereUniqueInput {
  @TypeGraphQL.Field(_type => customer_group_registration_sales_channelsCustomer_group_idSales_channel_idCompoundUniqueInput, {
    nullable: true
  })
  customer_group_id_sales_channel_id?: customer_group_registration_sales_channelsCustomer_group_idSales_channel_idCompoundUniqueInput | undefined;

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
