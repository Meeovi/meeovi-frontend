import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { CustomerListRelationFilter } from "../inputs/CustomerListRelationFilter";
import { Customer_group_registration_sales_channelsListRelationFilter } from "../inputs/Customer_group_registration_sales_channelsListRelationFilter";
import { Customer_group_translationListRelationFilter } from "../inputs/Customer_group_translationListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Sales_channelListRelationFilter } from "../inputs/Sales_channelListRelationFilter";

@TypeGraphQL.InputType("Customer_groupWhereInput", {})
export class Customer_groupWhereInput {
  @TypeGraphQL.Field(_type => [Customer_groupWhereInput], {
    nullable: true
  })
  AND?: Customer_groupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupWhereInput], {
    nullable: true
  })
  OR?: Customer_groupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupWhereInput], {
    nullable: true
  })
  NOT?: Customer_groupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  display_gross?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  registration_active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CustomerListRelationFilter, {
    nullable: true
  })
  customer?: CustomerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsListRelationFilter, {
    nullable: true
  })
  customer_group_registration_sales_channels?: Customer_group_registration_sales_channelsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_group_translationListRelationFilter, {
    nullable: true
  })
  customer_group_translation?: Customer_group_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelListRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelListRelationFilter | undefined;
}
