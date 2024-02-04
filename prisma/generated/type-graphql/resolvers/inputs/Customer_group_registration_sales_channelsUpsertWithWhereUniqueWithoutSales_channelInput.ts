import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_registration_sales_channelsCreateWithoutSales_channelInput } from "../inputs/Customer_group_registration_sales_channelsCreateWithoutSales_channelInput";
import { Customer_group_registration_sales_channelsUpdateWithoutSales_channelInput } from "../inputs/Customer_group_registration_sales_channelsUpdateWithoutSales_channelInput";
import { Customer_group_registration_sales_channelsWhereUniqueInput } from "../inputs/Customer_group_registration_sales_channelsWhereUniqueInput";

@TypeGraphQL.InputType("Customer_group_registration_sales_channelsUpsertWithWhereUniqueWithoutSales_channelInput", {})
export class Customer_group_registration_sales_channelsUpsertWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_group_registration_sales_channelsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsUpdateWithoutSales_channelInput, {
    nullable: false
  })
  update!: Customer_group_registration_sales_channelsUpdateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: Customer_group_registration_sales_channelsCreateWithoutSales_channelInput;
}
